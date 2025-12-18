import { Component } from '@angular/core';
import { DigitalCollections } from "../components/digital-collections/ui/digital-collections";
import { HeroSection } from "../components/hero-section/ui/hero-section";
import { ServicesSection } from "../components/services-section/ui/services-section";
import { LatestAddition } from "../components/latest-addition/ui/latest-addition";

@Component({
  selector: 'app-home',
  imports: [DigitalCollections, HeroSection, ServicesSection, LatestAddition],
  template: `
  <main aria-label="الصفحة الرئيسية"
  role="main" 
  class="grid grid-cols-1  gap-5  pb-10  ">

  <app-hero-section />

  <article aria-label="المحتوى الرئيسي"  role="article"
  class="grid grid-cols-1  gap-5   px-2 sm:px-5 md:px-4 lg:px-8 xl:px-12 2xl:px-14 ">
  <app-services-section />
  <app-digital-collections />
  <app-latest-addition />
  
  <section>
  <p class="text-text-dark text-sm ">
      تاريخ آخر تعديل: 19/03/2025 - 4:13 م بتوقيت السعودية
  </p>
  </section>

  </article>



  </main>
  `,
  styleUrl: './home.css',
})
export class Home {

}
