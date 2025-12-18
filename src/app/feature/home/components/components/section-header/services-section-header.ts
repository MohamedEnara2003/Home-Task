import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-services-section-header',
  imports: [RouterLink],
  template: `

  <header aria-label="Service Section Header"
  class="w-full flex  justify-between items-center border-b border-border pb-2">

  <h1 class="text-text-dark font-bold  text-xl sm:text-2xl   flex-none  self-stretch grow-0">
  {{title()}}
  </h1>
  
  <nav>
  @if(link()){
  <a [href]="link()"[routerLink]="link()"  role="link" class="ng-btn-outline">
    عرض الكل
  </a>
  }
  </nav>
  </header>
`,
})
export class ServiceSectionHeader {

link = input<string>('');
title = input.required<string>();

}
