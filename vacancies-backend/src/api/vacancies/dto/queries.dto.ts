import { VacancyStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  vacancy?: string;

  @IsOptional()
  @IsEnum(VacancyStatus, { each: true })
  status?: VacancyStatus;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minSalary?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxSalary?: number;
}
