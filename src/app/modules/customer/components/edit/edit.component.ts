import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseModalComponent } from 'src/app/core/common/base-modal-component';
import { ICustomer } from 'src/app/core/models/ICustomer';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})


export class EditComponent extends BaseModalComponent<ICustomer> implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public modalService:ModalService,private customerService: CustomerService) { super(); this.createContactForm(); }

  ngOnInit(): void {

  }
  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: [this.modalService.modalOptions.data.name || '', [Validators.required, Validators.minLength(2)]],
      lastname: [this.modalService.modalOptions.data.lastname || '', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    
    this.contactForm.value.id= this.modalService.modalOptions.data.id;
    this.contactForm.value.password= Math.floor(Math.random() * 4000);
    this.customerService.update(this.contactForm.value);
    this.customerService.get();
    this.modalService.close();
  }
  get f() {return this.contactForm.controls; }
}
