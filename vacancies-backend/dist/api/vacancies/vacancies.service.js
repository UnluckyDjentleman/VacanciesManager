"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let VacanciesService = class VacanciesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async GetVacancyById(id) {
        const getVacById = await this.prisma.vacancies.findUnique({
            where: {
                id,
            },
        });
        if (!getVacById) {
            throw new common_1.NotFoundException('Cannot find such vacancy!');
        }
        return getVacById;
    }
    async GetAllVacancies(query) {
        const { companyName, vacancy, status, minSalary, maxSalary } = query;
        let temp = null;
        if (!Object.values(client_1.VacancyStatus).includes(status)) {
            temp = client_1.VacancyStatus.PUBLISHED;
        }
        if (Number(minSalary) > Number(maxSalary)) {
            throw new common_1.ConflictException('Min salary cannot be lower than max salary');
        }
        const where = {};
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
    async CreateNewVacancy(vacancyDto) {
        const { companyName, vacancy, minSalary, maxSalary, status, note } = vacancyDto;
        let temp = null;
        if (!Object.values(client_1.VacancyStatus).includes(status)) {
            temp = client_1.VacancyStatus.PUBLISHED;
        }
        if (minSalary > maxSalary) {
            throw new common_1.ConflictException('Min Salary cannot be lower than max salary');
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
    async UpdateVacancy(id, vacancyDto) {
        const { companyName, vacancy, minSalary, maxSalary, status, note } = vacancyDto;
        let temp = null;
        if (!Object.values(client_1.VacancyStatus).includes(status)) {
            temp = client_1.VacancyStatus.PUBLISHED;
        }
        if (Number(minSalary) > Number(maxSalary)) {
            throw new common_1.ConflictException('Min salary cannot be lower than max salary');
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
    async DeleteVacancy(id) {
        return await this.prisma.vacancies.delete({
            where: {
                id,
            },
        });
    }
};
exports.VacanciesService = VacanciesService;
exports.VacanciesService = VacanciesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VacanciesService);
//# sourceMappingURL=vacancies.service.js.map