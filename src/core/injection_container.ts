import 'reflect-metadata';
import { Container } from 'inversify';
import { TodoDataSource } from '../data/datasources/remote/todo_data_source';
import { TodoRepository } from '../data/repository/todo_repository';

const di = new Container();
di.bind(TodoDataSource).toSelf().inSingletonScope();
di.bind(TodoRepository).toSelf().inSingletonScope();

export { di };
