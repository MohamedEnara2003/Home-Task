import { computed, Injectable, signal } from '@angular/core';
import { IAddition } from '../../../../../core/models/additions.model';

@Injectable()

export class LatestAdditionsService {

    #_additions = signal<IAddition[]>([
    {
    id : 1,
    image : '/images/Image (1).webp',
    title : `السيرة النبوية`,
    library : 'مكتبة عارف حكمة',
    type : 'مخطوط'
    },
    {
    id : 2,
    image : '/images/Image (2).webp',
    title : `ذيل السيرة النبوية`,
    library : 'كتاب نادر',
    type : 'مكتبة مدرسة الساقزلي'
    },
    {
    id : 3,
    image : '/images/Image (3).webp',
    title : `
    السيرة النبوية لابن هشام (الجزء الثاني) الجزء الثاني ، 291 صفحة  
    `,
    library : 'مكتبة مجمع الملك عبدالعزيز',
    type : 'كتاب نادر'
    },
    ]);

    additions = computed(() => this.#_additions());
}