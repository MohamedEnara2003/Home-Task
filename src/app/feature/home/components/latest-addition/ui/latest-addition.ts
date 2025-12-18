import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ServiceSectionHeader } from "../../components/section-header/services-section-header";
import { LatestAdditionsService } from '../service/latest-addition.service';


@Component({
  selector: 'app-latest-addition',
  imports: [ServiceSectionHeader],
  template: `

  
  <section 
  aria-label="أحدث المحتويات"
  role="region" 
  class="flex flex-col gap-6">
    
  <app-services-section-header
  link="' '"
  title="أحدث الاضافات"
  />

  <ul class="cards-container "
  aria-label="قائمة المكتبات" >

  @for (addition of latestAdditionsService.additions(); let i =$index; track addition.id) {
  <li>
  
  <article [aria-label]="addition.library + ' ' + (i + 1)" 
  class="w-full card">

  <figure class="image-card">
    <img 
    [src]="addition.image" 
    [alt]="addition.library + ' - ' + addition.type" 
    loading="lazy" 
    decoding="async" 
    class="image-card-img"
    />
    <figcaption class="sr-only">{{addition.title}}</figcaption>
  </figure>

  <h3 class="card-title line-clamp-1">{{addition.title}}</h3>

  <p class="flex items-center gap-4 ">
  <span class="card-text ">{{addition.type}}</span>
  <span class="card-text ">{{addition.library}}  </span>
  </p>

  <footer class="flex items-center gap-5">
    <button type="button" class="ng-btn" [aria-label]="'استعراض' + ' ' + addition.library  ">
      استعراض</button>
  </footer> 
  </article>
  </li>
  }
  </ul>

  </section>
  `,
  styleUrl: './latest-addition.css',
  providers : [LatestAdditionsService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LatestAddition {
  readonly latestAdditionsService = inject(LatestAdditionsService);
}
