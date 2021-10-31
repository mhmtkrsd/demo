import { ModalComponentBindingOptions } from '../interfaces/modal-component-binding-options';
import { BehaviorSubject } from 'rxjs';

export class BaseModalComponent<T> {
    public actionButtonText: string;
    public onBindingComplete: BehaviorSubject<void>;
    constructor() {
        this.onBindingComplete = new BehaviorSubject(null);
    }
    model: T;
    modelList:T[];
    
    total:number;
    bind(options: ModalComponentBindingOptions<T>): void {
        this.model = options.data ? options.data : {} as T;
        this.modelList = options.dataList ? options.dataList : {} as T[];
        this.onBindingComplete.next();
    }
}
