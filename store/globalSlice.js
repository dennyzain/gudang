import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    data: [
      {
        id: '',
        sku: '',
        name: '',
        costPrice: 0,
        retailPrice: 0,
        qty: 0,
        marginPercentage: 0,
      },
    ],
    totalPages: 0,
  },
  isPagination: false,
  supplier: {
    name: '',
    address: '',
    city: '',
    postCode: 0,
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setDataFetch: (state, action) => {
      state.data = action.payload;
    },
    setPagination: (state, action) => {
      state.isPagination = action.payload;
    },
  },
});

export const { setDataFetch, setPagination } = globalSlice.actions;

export default globalSlice.reducer;
