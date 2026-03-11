import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {CertificateRequest, CertificateState} from '../../types';
import {createCertificateRequest, fetchCertificateRequests} from './services/certificateService';

const initialState: CertificateState = {
  requests: [],
  loading: false,
  error: null,
  submitLoading: false,
  submitError: null,
};

export const fetchRequests = createAsyncThunk('certificate/fetchRequests', async () => {
  const data = await fetchCertificateRequests();
  return data;
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
