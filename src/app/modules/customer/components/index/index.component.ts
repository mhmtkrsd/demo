import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/core/models/ICustomer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AdminService } from '../../services/admin.service';
import { CustomerService } from '../../services/customer.service';
import { AddComponent } from '../add/add.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  access:boolean=false;
  superAdminAccess:boolean=false;
  constructor(public modal: ModalService, public authService:AuthService, public customerService: CustomerService,public adminService:AdminService) { }

  ngOnInit(): void {
    
    if(this.authService.isRole()==='superadmin'){
      this.access=true;
      this.superAdminAccess=true;
      this.customerService.get();
      this.adminService.get();
      
    }
    else if(this.authService.isRole()==='admin'){
      
      this.access=true;
      this.superAdminAccess=false;
      this.customerService.get();
    }
  }

  onNewRecordClicked(event: any) {
    this.modal.open({
      activeComponent: AddComponent,
      title: 'New Customer',
    });
  }
  onDeleteRecord(id: string) {
    this.modal.open({
      activeComponent: DeleteComponent,
      title: 'Delete Customer',
      data: id
    });
  }
  onEditRecord(item: ICustomer) {
    this.modal.open({
      activeComponent: EditComponent,
      title: 'Edit Customer',
      data: item
    });
  }
}
