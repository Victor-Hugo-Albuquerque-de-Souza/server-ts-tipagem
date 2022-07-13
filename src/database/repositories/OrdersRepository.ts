import Order, { OrderInput, OrderOutput } from '../../api/models/OrdersModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<OrderOutput[]> =>{
    return await Order.findAll();
}

export const getById = async (orderNumber:number): Promise<OrderOutput>=> {
    const order = await Order.findByPk(orderNumber);
    if (!order){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return order;
};

export const create = async (payload: OrderInput):Promise<OrderOutput> =>{
    return await Order.create(payload);
};

export const updateById = async (orderNumber:number, payload: OrderInput):Promise<OrderOutput> =>{
    const order= await Order.findByPk(orderNumber);
    if(!order){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await order.update(payload);
};

export const deleteById = async (orderNumber:number):Promise<void> =>{
    const order= await Order.findByPk(orderNumber);
    if(!order){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await order.destroy()
};