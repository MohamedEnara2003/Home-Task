import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
  <figure 
  routerLink="/"
  title="الشعار"
  aria-label="Logo" 
  role="figure" 
  class="w-17.5 h-15">
  <img 
  [src]="imageSrc()" 
  alt="Logo"
  role="img"
  loading="lazy"
  decoding="async"
  width="70"
  height="60" 
  class="object-cover cursor-pointer hover:scale-105 duration-300 transition-transform">
  <figcaption class="sr-only">Logo</figcaption>
  </figure>
  `,
})
export class Logo {
  isPlaceholder = input<boolean>(false);

  imageSrc = computed(() => this.isPlaceholder() ? 
  '/images/Logo Placeholder.webp' : 
  '/images/Logo (transparent-background) 1.webp' );
  
};
