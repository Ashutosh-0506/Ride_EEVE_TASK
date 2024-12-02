import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer, // Reducer for managing form states
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for handling non-serializable data like FormData if needed
    }),
});

export default store;
