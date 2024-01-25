import { CreateCarInput, CreateCarResponse, LoadAllCarResponse, LoadCarByIdResponse, UpdateCarResponse } from '../../app/car/types'
import { Car } from '../entities/car'

export interface LoadAllCar {
	loadAll: () => Promise<LoadAllCarResponse>;
}

export interface LoadCarById {
	loadById: (id: string) => Promise<LoadCarByIdResponse>;
}

export interface CreateCar {
	create: (data: CreateCarInput) => Promise<CreateCarResponse>;
}

export interface UpdateCar {
	update: (id: string, data: Partial<Car>) => Promise<UpdateCarResponse>;
}