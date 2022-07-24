import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import invoiceReducer from '../features/invoice/invoiceSlice';
import globalReducer from '../features/global/globalSlice';

export const store = configureStore({
   reducer: {
      invoice: invoiceReducer,
      global: globalReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
