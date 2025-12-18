import { Component, signal } from '@angular/core';
import { MainLinks } from "../main-links/main-links";
import { fromEvent, map, pairwise, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav-responsive',
  imports: [MainLinks],
  template: `
  @if(isScroll()){ 
  <nav aria-label="روابط التنقل المتجاوبة" role="navigation"
  class="w-full bg-bg-light p-2 fixed bottom-0  left-0 animate-up
  shadow shadow-text-display">
  <app-main-links/>
  </nav>
  }
  `,
})
export class NavResponsive {
  isScroll = signal<boolean>(true);

  constructor(){this.#handleScrolling()}

  #handleScrolling() : void {
  fromEvent(window , 'scroll').pipe(
  map(() => window.scrollY),
  pairwise(),
  tap(([a , b]) => this.isScroll.set(a > b || a < 50 && b < 50 ? true : false)),
  takeUntilDestroyed()
  ).subscribe();
  }

}
