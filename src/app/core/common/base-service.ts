
import { IEntity } from "../models/IEntity";
import { EventEmitter } from '@angular/core';

export class BaseService<T extends IEntity>  {
    entities!: T[];
    constructor() {

    }
   
}