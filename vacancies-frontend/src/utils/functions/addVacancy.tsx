import VacanciesApi from "../api";
import Vacancy from "../../constants/types/vacancy";

export async function AddNewVacancy(body: Omit<Vacancy, "id">) {
  try {
    console.log(body);
    const resp = await VacanciesApi.AddVac(body);
    return resp;
  } catch (e) {
    throw e;
  }
}
