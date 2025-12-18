import { computed, Injectable, signal } from '@angular/core';
import { IService } from '../../../../../core/models/services.model';

@Injectable()

export class ServicesSectionService {

    #_services = signal<IService[]>([
    {
    id : 1,
    service : `طلب مخطوط`,
    name : 'نص إضافي لمحتوى البطاقة ',
    },
    ]);

    services = computed(() => this.#_services());
}