import Customer, { CustomerInput, CustomerOutput } from '../../api/models/CustomersModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<CustomerOutput[]> =>{
    return await Customer.findAll();
}

export const getById = async (customerNumber:number): Promise<CustomerOutput>=> {
    const customer = await Customer.findByPk(customerNumber);
    if (!customer){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return customer;
};

export const create = async (payload: CustomerInput):Promise<CustomerOutput> =>{
    return await Customer.create(payload);
};

export const updateById = async (customerNumber:number, payload: CustomerInput):Promise<CustomerOutput> =>{
    const customer= await Customer.findByPk(customerNumber);
    if(!customer){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await customer.update(payload);
};

export const deleteById = async (customerNumber:number):Promise<void> =>{
    const customer= await Customer.findByPk(customerNumber);
    if(!customer){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await customer.destroy()
};