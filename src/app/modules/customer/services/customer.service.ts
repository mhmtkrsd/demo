import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/common/base-service';
import { ICustomer } from 'src/app/core/models/ICustomer';

@Injectable()
export class CustomerService extends BaseService<ICustomer> {

    constructor() { super(); }
    create(model: ICustomer): ICustomer {
        let customers = JSON.parse(localStorage.getItem('customers') || '[]');
        customers.push(model);
        localStorage.setItem("customers", JSON.stringify(customers));

        return model;
    }
    get(): Array<ICustomer> {
        this.entities = JSON.parse(localStorage.getItem('customers') || '[]');
        return this.entities;
    }
    delete(id: string): Array<ICustomer> {
        this.entities = JSON.parse(localStorage.getItem('customers') || '[]');
        this.entities = this.entities.filter(x => x.id !== id);
        localStorage.setItem("customers", JSON.stringify(this.entities));
        return this.entities;
    }
    update(entity: ICustomer): Array<ICustomer> {
        this.entities = JSON.parse(localStorage.getItem('customers') || '[]');
        let index = this.entities.findIndex(x => x.id === entity.id);
        this.entities[index] = entity;
        localStorage.setItem("customers", JSON.stringify(this.entities));
        return this.entities;
    }
}
