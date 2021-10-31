import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from 'src/app/core/common/base-modal-component';
import { ICustomer } from 'src/app/core/models/ICustomer';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})

export class DeleteComponent extends BaseModalComponent<ICustomer> implements OnInit {

  submitted = false;
  constructor(public modalService: ModalService, private customerService: CustomerService) { super(); }

  ngOnInit(): void {

  }


  onSubmit() {
    this.modalService.close();
  }
  deleteRecord() {
    this.customerService.delete(this.modalService.modalOptions.data);
    this.modalService.close();
  }
}
