import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/common/base-service';
import { IAdmin } from 'src/app/core/models/IAdmin';

@Injectable()
export class AdminService extends BaseService<IAdmin> {

  constructor() { super(); }
  create(model: IAdmin): IAdmin {
    let admins = JSON.parse(localStorage.getItem('admin') || '[]');
    admins.push(model);
    localStorage.setItem("admin", JSON.stringify(admins));

    return model;
  }
  get(): Array<IAdmin> {
    this.entities = JSON.parse(localStorage.getItem('admin') || '[]');
   
    return this.entities;
  }
  delete(id: string): Array<IAdmin> {
    this.entities = JSON.parse(localStorage.getItem('admin') || '[]');
    this.entities = this.entities.filter(x => x.id !== id);
    localStorage.setItem("admin", JSON.stringify(this.entities));
    return this.entities;
  }
  update(entity: IAdmin): Array<IAdmin> {
    this.entities = JSON.parse(localStorage.getItem('admin') || '[]');
    let index = this.entities.findIndex(x => x.id === entity.id);
    this.entities[index] = entity;
    localStorage.setItem("admin", JSON.stringify(this.entities));
    return this.entities;
  }
}
