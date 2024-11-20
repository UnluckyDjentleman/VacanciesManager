import VacanciesApi from "../api";
import Vacancy from "../../constants/types/vacancy";

export async function AddNewVacancy(body: Omit<Vacancy, "id">) {
  try {
    console.log(body);
    return await VacanciesApi.AddVac(body);
  } catch (e) {
    throw e;
  }
}
