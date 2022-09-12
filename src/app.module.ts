import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/modules/categoria.module';
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
      entities: [Tarefa, Categoria],
      synchronize: true
    }),
    TarefaModule,
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
