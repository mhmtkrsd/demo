import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ModalModule } from '../modal/modal.module';
import { IndexComponent } from './components/index/index.component';
import { AddComponent } from './components/add/add.component';
import { CustomerService } from './services/customer.service';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminService } from './services/admin.service';


@NgModule({
  declarations: [
    IndexComponent,AddComponent,DeleteComponent,EditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ModalModule,
    ReactiveFormsModule
  ],providers:[ModalService,CustomerService,AdminService]
})
export class CustomerModule { }
