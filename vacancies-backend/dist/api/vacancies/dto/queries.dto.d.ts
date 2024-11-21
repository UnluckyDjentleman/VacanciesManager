import { VacancyStatus } from '@prisma/client';
export declare class QueryDto {
    companyName?: string;
    vacancy?: string;
    status?: VacancyStatus;
    minSalary?: number;
    maxSalary?: number;
}
