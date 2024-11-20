import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { VacancyStatus } from '@prisma/client';
import { Transform, Type } from 'class-transformer';

export class CreateVacancyDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  vacancy: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  minSalary: number;

  @IsNotEmpty()
  @IsInt()
  @Max(100000)
  @Type(() => Number)
  maxSalary: number;

  @IsOptional()
  @Transform(({ value }) => value || VacancyStatus.PUBLISHED)
  status: VacancyStatus;

  @IsOptional()
  @Transform(({ value }) => value || '')
  note: string;
}
