"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesModule = void 0;
const common_1 = require("@nestjs/common");
const vacancies_service_1 = require("./vacancies.service");
const vacancies_controller_1 = require("./vacancies.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
const dist_1 = require("@nestjs/config/dist");
let VacanciesModule = class VacanciesModule {
};
exports.VacanciesModule = VacanciesModule;
exports.VacanciesModule = VacanciesModule = __decorate([
    (0, common_1.Module)({
        providers: [dist_1.ConfigService, prisma_service_1.PrismaService, vacancies_service_1.VacanciesService],
        controllers: [vacancies_controller_1.VacanciesController],
    })
], VacanciesModule);
//# sourceMappingURL=vacancies.module.js.map