import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './index/index.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ModalBodyContainerDirective } from 'src/app/core/directives/modal-body-container.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent,ModalBodyContainerDirective],
  exports: [
    ModalComponent,ModalBodyContainerDirective
  ],
  providers: [ModalService],
})
export class ModalModule { }
