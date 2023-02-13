import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';
/**
 * Tham khảo link sau để thiết lập store cho reactjs
 * https://redux-toolkit.js.org/tutorials/quick-start
 */
export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
