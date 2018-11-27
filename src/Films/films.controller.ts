import { Get, Post, Delete, Body, Controller, Param } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Film } from './film.interface';

@Controller('films')
export class FilmsController {

  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async findAll(): Promise<Film[]> {
    return this.filmsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Film[]> {
    console.log(params.id);
    return this.filmsService.findOne(params.id);
  }

  @Post()
  async create(@Body() film: Film) {
    this.filmsService.create(film);
  }

  @Delete(':id')
  deleteOne(@Param() params) {

  }

}
