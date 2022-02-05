import { configureStore } from '@reduxjs/toolkit';

import formLoginReducer from '../features/formLogin';

export const store = configureStore({
  reducer: {
    formLogin: formLoginReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;