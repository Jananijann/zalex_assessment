import certificateReducer, {updatePurpose} from '../features/certificate/slice';
import {CertificateState} from '../types';

const initialState: CertificateState = {
  requests: [
    {
      reference_no: 'REF001',
      address_to: 'Embassy of Neptune',
      purpose: 'Original purpose text that is long enough to pass validation',
      issued_on: '12/09/2025',
      employee_id: '123456',
      status: 'New',
    },
    {
      reference_no: 'REF002',
      address_to: 'Immigration Office',
      purpose: 'Work permit renewal purpose text that is long enough',
      issued_on: '06/15/2025',
      employee_id: '789012',
      status: 'Done',
    },
    {
      reference_no: 'REF003',
      address_to: 'Embassy of Mars',
      purpose: 'Study abroad application purpose text that is long enough',
      issued_on: '03/20/2025',
      employee_id: '345678',
      status: 'In Progress',
    },
  ],
  loading: false,
  error: null,
  submitLoading: false,
  submitError: null,
};

describe('updatePurpose reducer', () => {
  it('updates purpose when status is New', () => {
    const newPurpose =
      'Updated purpose text that is definitely long enough to pass the fifty character validation check';
    const action = updatePurpose({
      reference_no: 'REF001',
      purpose: newPurpose,
    });
    const state = certificateReducer(initialState, action);
    const updated = state.requests.find(r => r.reference_no === 'REF001');
    expect(updated?.purpose).toBe(newPurpose);
  });

  it('does NOT update purpose when status is Done', () => {
    const action = updatePurpose({
      reference_no: 'REF002',
      purpose: 'This should not be updated because the request is Done',
    });
    const state = certificateReducer(initialState, action);
    const request = state.requests.find(r => r.reference_no === 'REF002');
    expect(request?.purpose).toBe('Work permit renewal purpose text that is long enough');
  });

  it('does NOT update purpose when status is In Progress', () => {
    const action = updatePurpose({
      reference_no: 'REF003',
      purpose: 'This should not be updated because the request is In Progress',
    });
    const state = certificateReducer(initialState, action);
    const request = state.requests.find(r => r.reference_no === 'REF003');
    expect(request?.purpose).toBe('Study abroad application purpose text that is long enough');
  });

  it('does nothing when reference_no not found', () => {
    const action = updatePurpose({
      reference_no: 'REF999',
      purpose: 'This should not update anything',
    });
    const state = certificateReducer(initialState, action);
    expect(state.requests).toEqual(initialState.requests);
  });

  it('updates Redux state immediately without API call', () => {
    const newPurpose =
      'Locally updated purpose that is long enough to pass fifty character validation';
    const action = updatePurpose({
      reference_no: 'REF001',
      purpose: newPurpose,
    });
    const state = certificateReducer(initialState, action);
    expect(state.requests.find(r => r.reference_no === 'REF001')?.purpose).toBe(newPurpose);
    // State updated synchronously — no loading state changed
    expect(state.loading).toBe(false);
    expect(state.submitLoading).toBe(false);
  });
});
