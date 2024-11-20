import { PartialType } from '@nestjs/mapped-types';
import { CreateVacancyDto } from './createvacancy.dto';

export class UpdateVacancyDto extends PartialType(CreateVacancyDto) {}
