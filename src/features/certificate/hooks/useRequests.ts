import {useEffect, useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../app/rootReducer';
import {AppDispatch} from '../../../app/store';
import {fetchRequests, updatePurpose} from '../redux/slice';

export function useRequests() {
  const dispatch = useDispatch<AppDispatch>();
  const {requests, loading, error} = useSelector((state: RootState) => state.certificate);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  const refresh = useCallback(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dispatch(fetchRequests());
    setRefreshing(false);
  }, [dispatch]);

  const editPurpose = useCallback(
    (referenceNo: string, purpose: string) => {
      dispatch(updatePurpose({reference_no: referenceNo, purpose}));
    },
    [dispatch],
  );

  return {requests, loading, error, refresh, refreshing, onRefresh, editPurpose};
}
