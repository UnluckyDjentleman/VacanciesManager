import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVacancyDto } from './dto/createvacancy.dto';
import { UpdateVacancyDto } from './dto/updatevacancy.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, VacancyStatus } from '@prisma/client';
import { QueryDto } from './dto/queries.dto';

@Injectable()
export class VacanciesService {
  constructor(private prisma: PrismaService) {}
  async GetVacancyById(id: string) {
    const getVacById = await this.prisma.vacancies.findUnique({
      where: {
        id,
      },
    });
    if (!getVacById) {
      throw new NotFoundException('Cannot find such vacancy!');
    }
    return getVacById;
  }
  async GetAllVacancies(query: QueryDto) {
    const { companyName, vacancy, status, minSalary, maxSalary } = query;
    let temp = null;
    if (!Object.values(VacancyStatus).includes(status)) {
      temp = VacancyStatus.PUBLISHED;
    }
    if (Number(minSalary) > Number(maxSalary)) {
      throw new ConflictException('Min salary cannot be lower than max salary');
    }
    const where: Prisma.VacanciesWhereInput = {};
    if (companyName) {
      where.companyName = { contains: companyName };
    }
    if (vacancy) {
      where.vacancy = { contains: vacancy };
    }
    if (status) {
      where.status = temp !== null ? temp : status;
    }
    if (minSalary) {
      where.minSalary = { gte: Number(minSalary) };
    }
    if (maxSalary) {
      where.maxSalary = { lte: Number(maxSalary) };
    }
    return await this.prisma.vacancies.findMany({ where });
  }

  async CreateNewVacancy(vacancyDto: CreateVacancyDto) {
    const { companyName, vacancy, minSalary, maxSalary, status, note } =
      vacancyDto;
    let temp = null;
    if (!Object.values(VacancyStatus).includes(status)) {
      temp = VacancyStatus.PUBLISHED;
    }
    if (minSalary > maxSalary) {
      throw new ConflictException('Min Salary cannot be lower than max salary');
    }
    const newvacancy = await this.prisma.vacancies.create({
      data: {
        companyName,
        vacancy,
        minSalary,
        maxSalary,
        status: temp !== null ? temp : status,
        note,
      },
    });
    return newvacancy;
  }

  async UpdateVacancy(id: string, vacancyDto: UpdateVacancyDto) {
    const { companyName, vacancy, minSalary, maxSalary, status, note } =
      vacancyDto;
    let temp = null;
    if (!Object.values(VacancyStatus).includes(status)) {
      temp = VacancyStatus.PUBLISHED;
    }
    if (Number(minSalary) > Number(maxSalary)) {
      throw new ConflictException('Min salary cannot be lower than max salary');
    }
    const updatevacancy = await this.prisma.vacancies.update({
      where: {
        id,
      },
      data: {
        companyName: companyName,
        vacancy: vacancy,
        minSalary: minSalary,
        maxSalary: maxSalary,
        status: temp !== null ? temp : status,
        note: note,
      },
    });
    console.log(updatevacancy);
    return updatevacancy;
  }

  async DeleteVacancy(id: string) {
    return await this.prisma.vacancies.delete({
      where: {
        id,
      },
    });
  }
}
