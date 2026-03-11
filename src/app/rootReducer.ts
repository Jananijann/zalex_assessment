import {combineReducers} from '@reduxjs/toolkit';
import certificateReducer from '../features/certificate/slice';

const rootReducer = combineReducers({
  certificate: certificateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
