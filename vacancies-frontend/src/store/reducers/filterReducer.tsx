import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import FilterForVacancies from "../../constants/types/filterForVacancies";

const initialState: { filter: FilterForVacancies } = {
  filter: {
    companyName: undefined,
    vacancy: undefined,
    minSalary: undefined,
    maxSalary: undefined,
    status: undefined,
  },
};

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ filter: FilterForVacancies }>
    ) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = filterReducer.actions;

export default filterReducer.reducer;
