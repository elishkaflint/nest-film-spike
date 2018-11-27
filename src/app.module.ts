import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FilmsController } from './Films/films.controller';
import { FilmsService } from './Films/films.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, FilmsController],
  providers: [AppService, FilmsService],
})
export class AppModule {}
