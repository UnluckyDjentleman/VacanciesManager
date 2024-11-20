import Vacancy from "../../constants/types/vacancy";
import VacanciesApi from "../api";

export async function UpdateVacById(id: string, body: Partial<Vacancy>) {
  try {
    console.log(body);
    return await VacanciesApi.UpdateVac(id, body);
  } catch (e) {
    throw e;
  }
}
