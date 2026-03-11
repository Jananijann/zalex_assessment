import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CertificateRequest, CertificateState} from '../services/types';
import {createCertificateRequest, fetchCertificateRequests} from '../services/certificateService';

const PURPOSE_EDITS_KEY = '@purpose_edits';

const initialState: CertificateState = {
  requests: [],
  loading: false,
  error: null,
  submitLoading: false,
  submitError: null,
};

async function loadPurposeEdits(): Promise<Record<string, string>> {
  try {
    const raw = await AsyncStorage.getItem(PURPOSE_EDITS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

async function savePurposeEdit(referenceNo: string, purpose: string): Promise<void> {
  try {
    const edits = await loadPurposeEdits();
    edits[referenceNo] = purpose;
    await AsyncStorage.setItem(PURPOSE_EDITS_KEY, JSON.stringify(edits));
  } catch {
    // silent fail — persistence is best-effort
  }
}

function applyPurposeEdits(
  requests: CertificateRequest[],
  edits: Record<string, string>,
): CertificateRequest[] {
  return requests.map(r => {
    if (r.reference_no && edits[r.reference_no] && r.status === 'New') {
      return {...r, purpose: edits[r.reference_no]};
    }
    return r;
  });
}

export const fetchRequests = createAsyncThunk('certificate/fetchRequests', async () => {
  const data = await fetchCertificateRequests();
  const edits = await loadPurposeEdits();
  return applyPurposeEdits(data, edits);
});

export const submitRequest = createAsyncThunk(
  'certificate/submitRequest',
  async (request: Omit<CertificateRequest, 'reference_no' | 'status'>) => {
    const result = await createCertificateRequest(request);
    return result;
  },
);

const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {
    updatePurpose(state, action: PayloadAction<{reference_no: string; purpose: string}>) {
      const request = state.requests.find(r => r.reference_no === action.payload.reference_no);
      if (request && request.status === 'New') {
        request.purpose = action.payload.purpose;
        savePurposeEdit(action.payload.reference_no, action.payload.purpose);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRequests.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.requests = action.payload;
      })
      .addCase(fetchRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch requests';
      })
      .addCase(submitRequest.pending, state => {
        state.submitLoading = true;
        state.submitError = null;
      })
      .addCase(submitRequest.fulfilled, state => {
        state.submitLoading = false;
      })
      .addCase(submitRequest.rejected, (state, action) => {
        state.submitLoading = false;
        state.submitError = action.error.message || 'Failed to submit request';
      });
  },
});

export const {updatePurpose} = certificateSlice.actions;
export default certificateSlice.reducer;
