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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesController = void 0;
const common_1 = require("@nestjs/common");
const vacancies_service_1 = require("./vacancies.service");
const createvacancy_dto_1 = require("./dto/createvacancy.dto");
const updatevacancy_dto_1 = require("./dto/updatevacancy.dto");
const queries_dto_1 = require("./dto/queries.dto");
let VacanciesController = class VacanciesController {
    constructor(vacancyService) {
        this.vacancyService = vacancyService;
    }
    async getAllVacancies(query) {
        return this.vacancyService.GetAllVacancies(query);
    }
    async getById(id) {
        return this.vacancyService.GetVacancyById(id);
    }
    async addNewVacancy(vacancyDTO) {
        return this.vacancyService.CreateNewVacancy(vacancyDTO);
    }
    async updateVacancy(id, vacancyDTO) {
        console.log(vacancyDTO);
        return this.vacancyService.UpdateVacancy(id, vacancyDTO);
    }
    async deleteVacancy(id) {
        return this.vacancyService.DeleteVacancy(id);
    }
};
exports.VacanciesController = VacanciesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queries_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "getAllVacancies", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createvacancy_dto_1.CreateVacancyDto]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "addNewVacancy", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatevacancy_dto_1.UpdateVacancyDto]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "updateVacancy", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "deleteVacancy", null);
exports.VacanciesController = VacanciesController = __decorate([
    (0, common_1.Controller)('vacancies'),
    __metadata("design:paramtypes", [vacancies_service_1.VacanciesService])
], VacanciesController);
//# sourceMappingURL=vacancies.controller.js.map