import { Injectable } from '@nestjs/common';
import { Film } from './film.interface';

@Injectable()
export class FilmsService {
  private readonly films: Film[] = [];

  findAll(): Film[] {
    return this.films;
  }

  findOne(id: number): Film[] {
    return this.films.filter(film => film.id == id);
  }

  deleteOne(id: number) {
    //TODO Implement deleteOne method
  }

  create(film: Film) {
    this.films.push(film);
  }

}
