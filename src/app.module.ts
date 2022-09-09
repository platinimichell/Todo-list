import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefaModule } from './tarefa/entities/modules/tarefa.module';
import { Tarefa } from './tarefa/entities/tarefa.entitty';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todo',
      entities: [Tarefa],
      synchronize: true
    }),
    TarefaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
