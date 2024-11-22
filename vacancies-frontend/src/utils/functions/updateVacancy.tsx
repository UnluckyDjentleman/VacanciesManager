import Vacancy from "../../constants/types/vacancy";
import VacanciesApi from "../api";

export async function UpdateVacById(id: string, body: Partial<Vacancy>) {
  try {
    const resp = await VacanciesApi.UpdateVac(id, body);
    return resp;
  } catch (e) {
    throw e;
  }
}
