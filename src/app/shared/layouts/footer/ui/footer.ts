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

    <nav class="flex flex-col gap-4">

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
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="white" stroke-opacity="0.3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94353 8.21547C8.05038 8.00649 8.2653 7.875 8.5 7.875H12.6667C12.8674 7.875 13.0558 7.97137 13.1733 8.13407L17.2867 13.8294L23.0581 8.05806C23.3021 7.81398 23.6979 7.81398 23.9419 8.05806C24.186 8.30214 24.186 8.69786 23.9419 8.94194L18.028 14.8559L24.0067 23.1341C24.1441 23.3243 24.1633 23.5756 24.0565 23.7845C23.9496 23.9935 23.7347 24.125 23.5 24.125H19.3333C19.1326 24.125 18.9442 24.0286 18.8267 23.8659L14.7133 18.1706L8.94194 23.9419C8.69787 24.186 8.30214 24.186 8.05806 23.9419C7.81398 23.6979 7.81398 23.3021 8.05806 23.0581L13.972 17.1441L7.99333 8.86593C7.85591 8.67566 7.83668 8.42444 7.94353 8.21547ZM9.72235 9.125L19.6529 22.875H22.2777L12.3471 9.125H9.72235Z" fill="white"/>
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
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="white" stroke-opacity="0.3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94353 8.21547C8.05038 8.00649 8.2653 7.875 8.5 7.875H12.6667C12.8674 7.875 13.0558 7.97137 13.1733 8.13407L17.2867 13.8294L23.0581 8.05806C23.3021 7.81398 23.6979 7.81398 23.9419 8.05806C24.186 8.30214 24.186 8.69786 23.9419 8.94194L18.028 14.8559L24.0067 23.1341C24.1441 23.3243 24.1633 23.5756 24.0565 23.7845C23.9496 23.9935 23.7347 24.125 23.5 24.125H19.3333C19.1326 24.125 18.9442 24.0286 18.8267 23.8659L14.7133 18.1706L8.94194 23.9419C8.69787 24.186 8.30214 24.186 8.05806 23.9419C7.81398 23.6979 7.81398 23.3021 8.05806 23.0581L13.972 17.1441L7.99333 8.86593C7.85591 8.67566 7.83668 8.42444 7.94353 8.21547ZM9.72235 9.125L19.6529 22.875H22.2777L12.3471 9.125H9.72235Z" fill="white"/>
        </svg>
          </a>
        </li>

        <li role="listitem">
          <a
            routerLink="/"
            aria-label="تكبير النص"
          >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="white" stroke-opacity="0.3"/>
          <path d="M15.7916 12.2501C15.7916 11.9049 15.5118 11.6251 15.1666 11.6251C14.8214 11.6251 14.5416 11.9049 14.5416 12.2501V14.5417H12.25C11.9048 14.5417 11.625 14.8216 11.625 15.1667C11.625 15.5119 11.9048 15.7917 12.25 15.7917H14.5416V18.0834C14.5416 18.4286 14.8214 18.7084 15.1666 18.7084C15.5118 18.7084 15.7916 18.4286 15.7916 18.0834V15.7917H18.0833C18.4285 15.7917 18.7083 15.5119 18.7083 15.1667C18.7083 14.8216 18.4285 14.5417 18.0833 14.5417H15.7916V12.2501Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04163 15.1667C7.04163 10.6794 10.6793 7.04175 15.1666 7.04175C19.6539 7.04175 23.2916 10.6794 23.2916 15.1667C23.2916 17.1854 22.5554 19.0322 21.3369 20.4531L24.7752 23.8915C25.0193 24.1356 25.0193 24.5313 24.7752 24.7754C24.5312 25.0194 24.1354 25.0194 23.8914 24.7754L20.453 21.337C19.032 22.5556 17.1853 23.2917 15.1666 23.2917C10.6793 23.2917 7.04163 19.6541 7.04163 15.1667ZM15.1666 8.29175C11.3697 8.29175 8.29163 11.3698 8.29163 15.1667C8.29163 18.9637 11.3697 22.0417 15.1666 22.0417C18.9636 22.0417 22.0416 18.9637 22.0416 15.1667C22.0416 11.3698 18.9636 8.29175 15.1666 8.29175Z" fill="white"/>
          </svg>
          </a>
        </li>

        <li role="listitem">
          <a
            routerLink="/"
            aria-label="وضع التباين العالي"
          >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="white" stroke-opacity="0.3"/>
          <path d="M15.7916 12.2501C15.7916 11.9049 15.5118 11.6251 15.1666 11.6251C14.8214 11.6251 14.5416 11.9049 14.5416 12.2501V14.5417H12.25C11.9048 14.5417 11.625 14.8216 11.625 15.1667C11.625 15.5119 11.9048 15.7917 12.25 15.7917H14.5416V18.0834C14.5416 18.4286 14.8214 18.7084 15.1666 18.7084C15.5118 18.7084 15.7916 18.4286 15.7916 18.0834V15.7917H18.0833C18.4285 15.7917 18.7083 15.5119 18.7083 15.1667C18.7083 14.8216 18.4285 14.5417 18.0833 14.5417H15.7916V12.2501Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04163 15.1667C7.04163 10.6794 10.6793 7.04175 15.1666 7.04175C19.6539 7.04175 23.2916 10.6794 23.2916 15.1667C23.2916 17.1854 22.5554 19.0322 21.3369 20.4531L24.7752 23.8915C25.0193 24.1356 25.0193 24.5313 24.7752 24.7754C24.5312 25.0194 24.1354 25.0194 23.8914 24.7754L20.453 21.337C19.032 22.5556 17.1853 23.2917 15.1666 23.2917C10.6793 23.2917 7.04163 19.6541 7.04163 15.1667ZM15.1666 8.29175C11.3697 8.29175 8.29163 11.3698 8.29163 15.1667C8.29163 18.9637 11.3697 22.0417 15.1666 22.0417C18.9636 22.0417 22.0416 18.9637 22.0416 15.1667C22.0416 11.3698 18.9636 8.29175 15.1666 8.29175Z" fill="white"/>
          </svg>
          </a>
        </li>
      </ul>
    </section>
  </nav>
  </nav>

  <section
    class="flex flex-col-reverse sm:flex-row  sm:justify-between items-center gap-6"
  >
    <address
      class="w-full flex flex-col  gap-2 text-sm text-white/90 not-italic"
      aria-label="حقوق النشر"
    >
      <p>
        جميع الحقوق محفوظة لمجمع الملك عبدالعزيز للمكتبات الوقفية ©
        {{ FullYear() }}
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
  </section>
</footer>

  `,
  styleUrl: './footer.css',
  providers : [FooterService],
})
export class Footer {
  FullYear = signal<number>(new Date().getFullYear());

  footerService = inject(FooterService);

}
