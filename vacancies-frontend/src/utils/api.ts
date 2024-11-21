import axios from "axios";
import { apiUrl } from "../constants/apiUrl";
import FilterForVacancies from "../constants/types/filterForVacancies";
import Vacancy from "../constants/types/vacancy";

export default class VacanciesApi {
  public static async GetAllVacancies(filterParams: FilterForVacancies) {
    const resp = await axios.get(apiUrl, {
      params: {
        companyName: filterParams.companyName,
        status: filterParams.status,
        minSalary: filterParams.minSalary,
        maxSalary: filterParams.maxSalary,
        vacancy: filterParams.vacancy,
      },
    });
    return resp.data;
  }

  public static async GetVacancyById(id: string) {
    const resp = await axios.get(process.env.VITE_API_HOST + "/" + id);
    return resp.data;
  }

  public static async DeleteVacancy(id: string) {
    const resp = await axios.delete(process.env.VITE_API_HOST + "/" + id);
    return resp.data;
  }

  public static async AddVac(body: Omit<Vacancy, "id">) {
    console.log(body);
    const resp = await axios.post(import.meta.env.VITE_API_HOST, {
      companyName: body.companyName,
      vacancy: body.vacancy,
      status: body.status,
      note: body.note,
      minSalary: body.minSalary,
      maxSalary: body.maxSalary,
    });
    return resp.data;
  }

  public static async UpdateVac(id: string, body: Partial<Vacancy>) {
    console.log(body);
    const resp = await axios.put(process.env.VITE_API_HOST + "/" + id, {
      companyName: body.companyName,
      vacancy: body.vacancy,
      status: body.status,
      note: body.note,
      minSalary: body.minSalary,
      maxSalary: body.maxSalary,
    });
    return resp.data;
  }
}
