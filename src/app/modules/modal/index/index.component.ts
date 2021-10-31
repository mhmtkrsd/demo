import { Component, ComponentFactoryResolver, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ModalBodyContainerDirective } from 'src/app/core/directives/modal-body-container.directive';
import { BaseModalComponent } from 'src/app/core/common/base-modal-component';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],

})
export class ModalComponent implements AfterViewInit {
  @ViewChild('globalModal') modalElement: ElementRef;
  
  @ViewChild(ModalBodyContainerDirective) modalContentHost: ModalBodyContainerDirective;
  
  constructor(
    public modalService: ModalService,
    // private eventManager: EventManager,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    this.modalService.setup({ modalComponent: this, modalContainer: this.modalElement });
    // this.eventManager.addEventListener(this.backDrop.nativeElement, 'keyup.esc', this.modalService.close);
  }
  onOpening(): void {
    
    if (this.modalContentHost) {
      
     
       
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalService.modalOptions.activeComponent);
      const componentRef = this.modalContentHost.viewContainerRef.createComponent(componentFactory);
      
    }
  }
  onClosing(): void {
    this.modalContentHost.viewContainerRef.clear();
  }
}
