import { Component, inject, signal } from '@angular/core';
import { FooterService } from '../service/footer.service';
import { RouterLink } from '@angular/router';
import { Logo } from "../../logo/logo";


@Component({
  selector: 'app-footer',
  imports: [RouterLink, Logo],
  template: `
<footer
  class="w-full bg-primary-dark text-white px-8 sm:px-12 md:px-16 lg:px-20 py-12 pb-20 flex flex-col gap-12"
  role="contentinfo"
>
  <!-- Footer Navigation -->
  <nav
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full"
    role="navigation"
    aria-label="روابط تذييل الموقع"
  >
    @for (item of footerService.footerLinks(); track item.title) {
      <section class="flex flex-col gap-4 min-w-55">
        <h2
          class="text-lg font-semibold border-b border-white/30 pb-2"
          id="{{ item.title }}"
        >
          {{ item.title }}
        </h2>

        <ul
          class="flex flex-col gap-3 text-sm"
          role="list"
          aria-labelledby="{{ item.title }}"
        >
          @for (link of item.links; track link.id) {
            <li role="listitem">
              <a
                [routerLink]="link.url"
                class="text-white/80 hover:text-white transition-colors"
                aria-label="{{ link.label }}"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>
      </section>
    }

    <!-- Social Media -->
    <section class="flex flex-col gap-4 min-w-55">
      <h2 class="text-lg font-semibold border-b border-white/30 pb-2" id="social-media">
        تابعنا على
      </h2>

      <ul
        class="flex items-center gap-3"
        role="list"
        aria-labelledby="social-media"
      >
        <li role="listitem">
          <a
            routerLink="/"
            aria-label="تابعنا على تويتر"
            class="hover:opacity-90 transition"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              role="img"
              aria-hidden="true"
            >
              <!-- SVG PATH -->
            </svg>
          </a>
        </li>
      </ul>
    </section>

    <!-- Accessibility Tools -->
    <section class="flex flex-col gap-4 min-w-55">
      <h2 class="text-lg font-semibold border-b border-white/30 pb-2" id="accessibility-tools">
        أدوات الإتاحة والوصول
      </h2>

      <ul
        class="flex items-center gap-3"
        role="list"
        aria-labelledby="accessibility-tools"
      >
        <li role="listitem">
          <a
            routerLink="/"
            aria-label="وضع تحسين الرؤية"
          >
            <svg
              width="32"
              height="32"
              role="img"
              aria-hidden="true"
            ></svg>
          </a>
        </li>

        <li role="listitem">
          <a
            routerLink="/"
            aria-label="تكبير النص"
          >
            <svg
              width="32"
              height="32"
              role="img"
              aria-hidden="true"
            ></svg>
          </a>
        </li>

        <li role="listitem">
          <a
            routerLink="/"
            aria-label="وضع التباين العالي"
          >
            <svg
              width="32"
              height="32"
              role="img"
              aria-hidden="true"
            ></svg>
          </a>
        </li>
      </ul>
    </section>
  </nav>

  <!-- Bottom Section -->
  <div
    class="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-5"
  >
    <address
      class="flex flex-col gap-2 text-sm text-white/90 not-italic"
      aria-label="حقوق النشر"
    >
      <p>
        جميع الحقوق محفوظة لمجمع الملك عبدالعزيز للمكتبات الوقفية ©
        {{ fullName() }}
      </p>
      <time
        datetime="2025-12-18"
        class="text-white/70"
      >
        تاريخ آخر تعديل: 18/12/2025
      </time>
    </address>

    <app-logo
      [isPlaceholder]="true"
      aria-label="شعار الموقع"
    />
  </div>
</footer>

  `,
  styleUrl: './footer.css',
  providers : [FooterService],
})
export class Footer {
  fullName = signal<number>(new Date().getFullYear());

  footerService = inject(FooterService);

}
