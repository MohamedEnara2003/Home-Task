import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ServiceSectionHeader } from "../../components/section-header/services-section-header";
import { ServicesSectionService } from '../service/services-section.service';

@Component({
  selector: 'app-services-section',
  imports: [ServiceSectionHeader],
  template: `

  <section 
  aria-label="قسم الخدمات"
  role="region" 
  class="flex flex-col gap-6">

  <app-services-section-header 
  title="الخدمات"
  />
  
  <ul class="cards-container">
  @for (item of servicesSectionService.services(); let i =$index; track item.id) {
    
  <li [aria-label]="'الخدمة' + '-' +  (i + 1)" >
  <article [aria-label]="'الخدمة' + ' ' +  item.service" 
  role="article" class="small-card">

  <span id="Icon-service">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.497 1.25C18.9112 1.25002 19.247 1.5858 19.247 2C19.247 2.4142 18.9112 2.74998 18.497 2.75H6.30757C5.86215 2.75001 5.55166 2.82073 5.34468 2.97266C4.83078 3.34989 4.39762 3.94829 4.2812 4.59668C4.17323 5.1986 4.31878 5.94236 5.14449 6.72656C5.50993 7.07358 6.06862 7.24114 6.72652 7.24121H16.75V6.44531C16.75 6.03113 16.4141 5.69535 16 5.69531H7.49995C7.08574 5.69531 6.74995 5.35953 6.74995 4.94531C6.74995 4.5311 7.08574 4.19531 7.49995 4.19531H16C17.2425 4.19535 18.25 5.20268 18.25 6.44531V7.24121H18.2832C18.6905 7.24121 19.465 7.25938 20.1308 7.74414C20.8444 8.26372 21.25 9.16944 21.25 10.5273V17.9814C21.2498 20.6112 19.1284 22.7499 16.5029 22.75H7.47261C6.18776 22.75 5.04159 22.2928 4.19917 21.458C3.35868 20.625 2.86292 19.4587 2.79097 18.1113L2.78999 18.0918L2.75581 5.16797C2.7558 5.16308 2.75573 5.15819 2.75581 5.15332C2.73887 4.87621 2.75622 4.60073 2.80464 4.33105C3.00192 3.23262 3.69727 2.32139 4.45699 1.76367C5.05338 1.32589 5.75915 1.25001 6.30757 1.25H18.497ZM4.28999 18.0498C4.34809 19.0648 4.71475 19.8573 5.25484 20.3926C5.79628 20.9292 6.554 21.25 7.47261 21.25H16.5029C18.2924 21.2499 19.7498 19.7903 19.75 17.9814V10.5273C19.75 9.46279 19.4443 9.10007 19.248 8.95703C19.0039 8.77929 18.6693 8.74121 18.2832 8.74121H6.72652C5.91315 8.74115 4.99082 8.55187 4.26363 7.94922L4.28999 18.0498ZM12 16.1953C12.4141 16.1954 12.75 16.5311 12.75 16.9453C12.75 17.3595 12.4141 17.6953 12 17.6953H8.99995C8.58574 17.6953 8.24995 17.3595 8.24995 16.9453C8.24995 16.5311 8.58574 16.1953 8.99995 16.1953H12ZM15 12.1953C15.4141 12.1954 15.75 12.5311 15.75 12.9453C15.75 13.3595 15.4141 13.6953 15 13.6953H8.99995C8.58574 13.6953 8.24995 13.3595 8.24995 12.9453C8.24995 12.5311 8.58574 12.1953 8.99995 12.1953H15Z" fill="#067647"/>
  </svg>
  </span>

  <header class="flex flex-col gap-2">
  <h3 class="card-title"> {{item.service}}</h3>
  <p class="card-text"> {{item.name}}</p>
  </header>

  <footer class="flex items-center gap-5">
  <button type="button"  role="button" class="ng-btn" [aria-label]="'ابدأ' + ' ' +  item.service  ">
  ابدأ الخدمة   
  </button>
  <button type="button" role="button"  class="ng-btn-outline" 
  [aria-label]="' تفاصيل الخدمة' + ' ' + item.service" >
  تفاصيل الخدمة
  </button>
  </footer>
</article>
</li>
  }
    </ul>
  </section>
  `,
  styleUrl: './services-section.css',
    providers : [ServicesSectionService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ServicesSection {

  readonly servicesSectionService = inject(ServicesSectionService);
}
