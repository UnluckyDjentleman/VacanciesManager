import { VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/createvacancy.dto';
import { UpdateVacancyDto } from './dto/updatevacancy.dto';
import { QueryDto } from './dto/queries.dto';
export declare class VacanciesController {
    private vacancyService;
    constructor(vacancyService: VacanciesService);
    getAllVacancies(query: QueryDto): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }[]>;
    getById(id: string): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
    addNewVacancy(vacancyDTO: CreateVacancyDto): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
    updateVacancy(id: string, vacancyDTO: UpdateVacancyDto): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
    deleteVacancy(id: string): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
}
