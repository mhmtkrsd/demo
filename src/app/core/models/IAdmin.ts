import { IEntity } from "./IEntity";

export interface IAdmin extends IEntity{
    name:string;
    lastname:string,
    role:string
}