import { IEntity } from "./IEntity";

export interface ICustomer extends IEntity{
    name:string;
    lastname:string,
    password:string
}