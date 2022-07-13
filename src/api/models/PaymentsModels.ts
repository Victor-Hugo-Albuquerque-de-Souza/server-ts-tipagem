import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface PaymentAttributes {
    customerNumber: string;
    checkNumber:string;
    paymentDate: string;
    amount:number;
};

export interface PaymentInput extends Optional <PaymentAttributes, 'customerNumber'>{};
export interface PaymentOutput extends Required <PaymentAttributes>{};

class Payment extends Model<PaymentAttributes, PaymentInput> {
    declare customerNumber: string;
    declare checkNumber:string;
    declare paymentDate: string;
    declare amount:number;
};

Payment.init({
    customerNumber: {type:DataTypes.STRING, primaryKey:true, autoIncrement:true},
    checkNumber:{type:DataTypes.STRING(50), allowNull:false},
    paymentDate: {type:DataTypes.DATE, allowNull:false},
    amount:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    sequelize, 
    modelName: 'payments'
});

export default Payment