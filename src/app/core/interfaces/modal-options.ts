import { Type } from '@angular/core';

export interface ModalOptions {
    activeComponent: Type<any>;
    title: string;
    data?:any;
}
