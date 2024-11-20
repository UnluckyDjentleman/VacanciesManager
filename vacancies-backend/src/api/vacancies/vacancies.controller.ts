import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/createvacancy.dto';
import { UpdateVacancyDto } from './dto/updatevacancy.dto';
import { QueryDto } from './dto/queries.dto';

@Controller('vacancies')
export class VacanciesController {
  constructor(private vacancyService: VacanciesService) {}

  @Get()
  async getAllVacancies(@Query() query: QueryDto) {
    return this.vacancyService.GetAllVacancies(query);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.vacancyService.GetVacancyById(id);
  }

  @Post()
  async addNewVacancy(@Body() vacancyDTO: CreateVacancyDto) {
    return this.vacancyService.CreateNewVacancy(vacancyDTO);
  }

  @Put(':id')
  async updateVacancy(
    @Param('id') id: string,
    @Body() vacancyDTO: UpdateVacancyDto,
  ) {
    console.log(vacancyDTO);
    return this.vacancyService.UpdateVacancy(id, vacancyDTO);
  }

  @Delete(':id')
  async deleteVacancy(@Param('id') id: string) {
    return this.vacancyService.DeleteVacancy(id);
  }
}
