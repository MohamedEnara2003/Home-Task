import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ServiceSectionHeader } from "../../components/section-header/services-section-header";
import { DigitalCollectionsService } from '../service/digital-collections.service';


@Component({
  selector: 'app-digital-collections',
  imports: [ServiceSectionHeader],
  template: `

<section aria-label="المجموعات الرقمية" role="region"
class="flex flex-col gap-6">
  
  <app-services-section-header
  link="' '"
  title="المكتبات الوقفية"
  />

  <ul class="w-full cards-container 
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-2
  order-1 self-stretch grow-0"
  aria-label="قائمة المكتبات" >

  @for (collection of digitalCollectionsService.collections(); let i =$index; track collection.id) {

  <li >

  <article [aria-label]="collection.library" 
  class="w-full card">

  <figure class="image-card">
    <img 
    [src]="collection.image"
    [alt]="collection.library + ' - '+ (i + 1) " 
    loading="lazy" 
    decoding="async" 
    class="image-card-img"
    />
    <figcaption class="sr-only">{{collection.library}}</figcaption>
  </figure>

  <h3 class="card-title"> {{collection.library}} </h3>
  <p class="card-text ">نبذة </p>

  <footer class="flex items-center gap-5">
    <button type="button" class="ng-btn" [aria-label]="'استعراض' + ' ' + collection.library "
    >استعراض</button>
  </footer> 
  </article>
  </li>
  }
  </ul>




  </section>
  `,
  styleUrl: './digital-collections.css',
    providers : [DigitalCollectionsService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DigitalCollections {

  readonly digitalCollectionsService = inject(DigitalCollectionsService);
}
