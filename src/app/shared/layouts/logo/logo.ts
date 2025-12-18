import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
  <figure aria-label="Logo" role="figure">
  <img 
  [src]="isPlaceholder() ? '/images/Logo Placeholder.webp' : '/images/Logo (transparent-background) 1.webp'" 
  alt="Logo"
  role="img"
  loading="eager"
  decoding="sync"
  width="70"
  height="60" 
  class="object-cover">
  <figcaption class="sr-only">Logo</figcaption>
  </figure>
  `,
})
export class Logo {
  isPlaceholder = input<boolean>(false);
};
