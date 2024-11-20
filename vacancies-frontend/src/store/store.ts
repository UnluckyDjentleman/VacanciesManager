import { configureStore } from "@reduxjs/toolkit";
import vacancyReducer from "./reducers/vacanciesReducer";
import filterReducer from "./reducers/filterReducer";

export const store = configureStore({
  reducer: {
    vacancy: vacancyReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
