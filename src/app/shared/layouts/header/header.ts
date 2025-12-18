import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { MainLinks } from "../navigations/main-links/main-links";
import { NavBarActions } from "../navigations/nav-bar-actions/nav-bar-actions";

@Component({
  selector: 'app-header',
  imports: [Logo, MainLinks, NavBarActions],
  template: `
  <header class="w-full h-18  flex justify-between items-center px-4   mx-auto">
  <!-- Header Navigation -->
  <nav 
  aria-label="روابط التنقل الرئيسية" 
  role="navigation" 
  class="flex items-center gap-6">
  <app-logo/>
  <app-main-links class="hidden md:inline-block" />
  </nav>
  
  <app-nav-bar-actions/>
  </header>
  `,
  styleUrl: './header.css',
})
export class Header {

}
