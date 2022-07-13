import * as repository from '../database/repositories/OrdersRepository'
import { OrderInput, OrderOutput } from "../api/models/OrdersModels"

export const getAll = async (): Promise<OrderOutput[]> => {
    return await repository.getAll();
}

export const getById = async (orderNumber:number): Promise<OrderOutput>=> {
    return await repository.getById(orderNumber);
} 

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await repository.create(payload)
}

export const updateById = async (orderNumber:number, payload: OrderInput):Promise<OrderOutput> =>{
    return await repository.updateById(orderNumber, payload);
};

export const deleteById = async (orderNumber:number):Promise<void> =>{
    await repository.deleteById(orderNumber);
};

function OrderNumber(orderNumber: any, payload: OrderInput): OrderOutput | PromiseLike<OrderOutput> {
    throw new Error('Function not implemented.');
}
