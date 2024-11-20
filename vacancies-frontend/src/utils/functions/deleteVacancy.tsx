import VacanciesApi from "../api";

export async function DeleteVac(id: string) {
  try {
    return await VacanciesApi.DeleteVacancy(id);
  } catch (e) {
    throw e;
  }
}
