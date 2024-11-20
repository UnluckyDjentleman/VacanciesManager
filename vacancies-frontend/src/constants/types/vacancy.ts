import { VacancyStatus } from "../vacancyStatus";

interface Vacancy {
  id: string;
  companyName: string;
  vacancy: string;
  minSalary: number;
  maxSalary: number;
  status:
    | VacancyStatus.ACCEPTED
    | VacancyStatus.DECLINED
    | VacancyStatus.PUBLISHED;
  note: string;
}

export default Vacancy;
