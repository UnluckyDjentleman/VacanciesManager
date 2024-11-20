import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Vacancy from "../../constants/types/vacancy";

const initialState: {
  vacancies: Vacancy[];
  error: string | null;
  load: boolean;
} = {
  vacancies: [],
  error: null,
  load: false,
};

export const vacancyReducer = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setLoad: (state, action: PayloadAction<{ load: boolean }>) => {
      state.load = action.payload.load;
    },
    setVacancies: (state, action: PayloadAction<{ vacancies: Vacancy[] }>) => {
      state.vacancies = action.payload.vacancies;
    },
    addVacancy: (state, action: PayloadAction<{ vacancy: Vacancy }>) => {
      console.log(action.payload.vacancy);
      state.vacancies.push(action.payload.vacancy);
    },
    updateVacancy: (state, action: PayloadAction<{ vacancy: Vacancy }>) => {
      const index = state.vacancies.findIndex(
        (el) => el.id === action.payload.vacancy.id
      );
      if (index !== -1) {
        state.vacancies[index] = action.payload.vacancy;
      }
    },
    removeVacancy: (state, action: PayloadAction<{ vacancy: Vacancy }>) => {
      state.vacancies = state.vacancies.filter(
        (el) => el.id !== action.payload.vacancy.id
      );
    },
  },
});

export const {
  setVacancies,
  addVacancy,
  updateVacancy,
  removeVacancy,
  setLoad,
  setError,
} = vacancyReducer.actions;

export default vacancyReducer.reducer;
