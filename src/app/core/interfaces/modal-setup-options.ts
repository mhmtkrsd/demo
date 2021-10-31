import { ElementRef } from '@angular/core';
import { ModalComponent } from 'src/app/modules/modal/index/index.component';

export interface ModalSetupOptions {
    modalContainer: ElementRef;
    modalComponent: ModalComponent;
}
