import { CreateVacancyDto } from './dto/createvacancy.dto';
import { UpdateVacancyDto } from './dto/updatevacancy.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto } from './dto/queries.dto';
export declare class VacanciesService {
    private prisma;
    constructor(prisma: PrismaService);
    GetVacancyById(id: string): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
    GetAllVacancies(query: QueryDto): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }[]>;
    CreateNewVacancy(vacancyDto: CreateVacancyDto): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
    UpdateVacancy(id: string, vacancyDto: UpdateVacancyDto): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
    DeleteVacancy(id: string): Promise<{
        companyName: string;
        vacancy: string;
        minSalary: number;
        maxSalary: number;
        status: import(".prisma/client").$Enums.VacancyStatus;
        note: string;
        id: string;
    }>;
}
