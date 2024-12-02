import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formType: 'Outstation', // Default formType set to "Outstation"
  formData: {
    Local: {},
    Outstation: {
      tripType: 'Round Trip', // Default tripType for Outstation
    },
    Airport: {},
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      console.log("Updating form data for:", action.payload.formType);
      const { formType, data } = action.payload;
      state.formData[formType] = { ...state.formData[formType], ...data };
    },
    setFormType: (state, action) => {
      state.formType = action.payload;
    },
    resetFormData: (state, action) => {
      const formType = action.payload;
      state.formData[formType] = formType === 'Outstation' 
        ? { tripType: 'Round Trip' } // Retain default tripType for Outstation
        : {};
    },
  },
});

export const { updateFormData, setFormType, resetFormData } = formSlice.actions;
export default formSlice.reducer;
