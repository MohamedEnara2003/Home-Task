import { computed, Injectable, signal } from '@angular/core';
import { IFooterLink } from '../../../../core/models/footer.model';

@Injectable()

export class FooterService {

 #_footerLinks = signal<IFooterLink[]>([
{
    title: 'ملخص',
    links: [
    {id :1 ,  label: 'الخدمات', url: '' },
    {id :2 ,  label: 'المكتبات الوقفية', url: '' },
    {id :3 ,  label: 'تصفح المستودع', url: '' },
    {id :4 ,  label: 'المشاركة الإلكترونية', url: '' },
    {id :5 ,  label: 'تسجيل الدخول', url: '' },
    ],
},
{
    title: 'روابط مهمة',
    links: [
    { id :1 , label: 'مجمع الملك عبدالعزيز للمكتبات الوقفية', url: '' },
    { id :2 , label: 'الخصوصية وشروط الاستخدام', url: '' },
    { id :3 , label: 'اتفاقية مستوى الخدمة', url: '' },
    { id :4 , label: 'الأسئلة الشائعة', url: '' },
    { id :5 , label: 'تواصل معنا', url: '' },
    ],
},
]);

footerLinks = computed(() => this.#_footerLinks());

}