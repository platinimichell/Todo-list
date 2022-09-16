import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TarefaController } from "src/tarefa/controllers/tarefa.controller";
import { TarefaService } from "src/tarefa/service/tarefa.service";
import { Tarefa } from "../entities/tarefa.entitty";



@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    providers: [TarefaService],
    controllers: [TarefaController],
    exports: [TypeOrmModule]

})
export class TarefaModule{}