import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ModalOptions } from 'src/app/core/interfaces/modal-options';
import { ModalSetupOptions } from 'src/app/core/interfaces/modal-setup-options';

@Injectable()
export class ModalService {

  private modalSetupOptions: ModalSetupOptions;
  modalOptions: ModalOptions;
  private renderer: Renderer2;
  
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    
  }

  setup(setupOptions: ModalSetupOptions) {

    this.modalSetupOptions = setupOptions;
  }

  open(options: ModalOptions): void {
    
    if (options) { this.modalOptions = options; }
    
    this.modalSetupOptions.modalComponent.onOpening();
    this.renderer.addClass(document.body, 'modal-open');
    
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'block');
    setTimeout(() => this.renderer.addClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 100);
  }

  close(): void {
    this.modalSetupOptions.modalComponent.onClosing();
    this.renderer.removeClass(document.body, 'modal-open');
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'none');
  
    setTimeout(() => this.renderer.removeClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 200);
  }
}
