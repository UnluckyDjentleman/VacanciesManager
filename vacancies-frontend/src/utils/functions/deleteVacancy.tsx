import VacanciesApi from "../api";

export async function DeleteVac(id: string) {
  try {
    const resp = await VacanciesApi.DeleteVacancy(id);
    return resp;
  } catch (e) {
    throw e;
  }
}
