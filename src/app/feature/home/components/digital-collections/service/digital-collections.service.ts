import { computed, Injectable, signal } from '@angular/core';
import { ICollection } from '../../../../../core/models/collections.model';

@Injectable()

export class DigitalCollectionsService {

    #_collections = signal<ICollection[]>([
    {
    id : 1,
    image : 'images/Image.webp',
    library : 'مكتبة عارف حكمة',
    type : ''
    },
    {
    id : 2,
    image : 'images/Image.webp',
    library : 'المكتبة المحمودية',
    type : ''
    },
    {
    id : 3,
    image : 'images/Image.webp',
    library : 'مكتبة رباط عثمان بن عفان',
    type : ''
    },
    ]);

    collections = computed(() => this.#_collections());
}