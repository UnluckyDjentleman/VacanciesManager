import { VacancyStatus } from '@prisma/client';
export declare class CreateVacancyDto {
    companyName: string;
    vacancy: string;
    minSalary: number;
    maxSalary: number;
    status: VacancyStatus;
    note: string;
}
