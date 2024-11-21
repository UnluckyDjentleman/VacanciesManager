"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVacancyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createvacancy_dto_1 = require("./createvacancy.dto");
class UpdateVacancyDto extends (0, mapped_types_1.PartialType)(createvacancy_dto_1.CreateVacancyDto) {
}
exports.UpdateVacancyDto = UpdateVacancyDto;
//# sourceMappingURL=updatevacancy.dto.js.map