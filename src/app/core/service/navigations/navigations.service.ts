import { computed, Injectable, signal } from '@angular/core';
import { IMainLinks } from '../../models/main-links.model';

@Injectable({
    providedIn: 'root'
})

export class NavigationsService {

    #_mainLinks = signal<IMainLinks[]>([
    {
    id : 1 , 
    name : 'الرئيسية',
    path : '/',
    },
    {
    id : 2 , 
    name : 'الخدمات',
    },
    {
    id : 3 , 
    name : 'تصفح المستودع',
    },
    {
    id : 4 , 
    name : 'تواصل',
    },
    ]).asReadonly();


    mainLinks  = computed(() => this.#_mainLinks());

}