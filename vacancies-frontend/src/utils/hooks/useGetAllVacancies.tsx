import { AxiosError } from "axios";
import { useEffect } from "react";
import FilterForVacancies from "../../constants/types/filterForVacancies";
import VacanciesApi from "../api";
import { useAppDispatch, useAppSelector } from "./useRedux";
import {
  setError,
  setLoad,
  setVacancies,
} from "../../store/reducers/vacanciesReducer";

export default function useGetAllVacancies(
  filterVacancies: FilterForVacancies
) {
  const { vacancies, error, load } = useAppSelector((state) => state.vacancy);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoad({ load: true }));
    VacanciesApi.GetAllVacancies(filterVacancies)
      .then((data) => {
        dispatch(setLoad({ load: false }));
        dispatch(setVacancies({ vacancies: data }));
        dispatch(setError({ error: null }));
      })
      .catch((e: AxiosError) => {
        dispatch(setLoad({ load: false }));
        dispatch(
          setError({
            error:
              e.response !== undefined
                ? (e.response?.data as string)
                : e.message,
          })
        );
      });
  }, [dispatch, filterVacancies]);

  console.log({ error, load, vacancies });

  return { error, load, vacancies };
}
