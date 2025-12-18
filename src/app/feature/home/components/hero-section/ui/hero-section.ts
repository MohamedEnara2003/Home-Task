import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  template: `
    <section 
    aria-label="القسم الرئيسي"
    class="hero-section"
    style="background-image: linear-gradient(0deg, rgba(9,42,30,0.8), rgba(9,42,30,0.8)),
    url('images/6010c675f7b4ad6269e420554307a5c83c72d7a5 (1).webp');"
    >
  

<article aria-label="المستودع الرقمي"  role="article" 
class="w-full sm-w-120 md:w-2xl flex flex-col gap-8  " >

  <header class="flex flex-col gap-6 w-full text-text-light">
    <h1 class="text-2xl sm:text-4xl md:text-[60px] leading-18 tracking-tight font-semibold">
      المستودع الرقمي
    </h1>

    <p class="sm:text-lg md:text-xl leading-7.5 font-normal">
      المستودع الرقمي هو منصة تقدم طريقة آمنة وفعالة لتخزين وإدارة المستندات الرقمية.
    </p>
  </header>

<form
  class="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 rounded-sm"
  role="search"
>

<div class="relative w-full  h-10 bg-bg-light">

      <label for="search-input" class="sr-only">
        البحث في المستودع الرقمي
      </label>

      <span  id="Search icon" class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.125 0C3.63769 0 0 3.63769 0 8.125C0 12.6123 3.63769 16.25 8.125 16.25C10.1437 16.25 11.9904 15.5138 13.4114 14.2953L16.8497 17.7336C17.0938 17.9777 17.4895 17.9777 17.7336 17.7336C17.9777 17.4895 17.9777 17.0938 17.7336 16.8497L14.2953 13.4114C15.5138 11.9904 16.25 10.1437 16.25 8.125C16.25 3.63769 12.6123 0 8.125 0ZM1.25 8.125C1.25 4.32804 4.32804 1.25 8.125 1.25C11.922 1.25 15 4.32804 15 8.125C15 11.922 11.922 15 8.125 15C4.32804 15 1.25 11.922 1.25 8.125Z" fill="#161616"/>
      </svg>
      </span>

      <input
        id="search-input"
        type="search"
        aria-label="البحث في المستودع الرقمي"
        placeholder="البحث في المستودع الرقمي"
        class="w-full h-10 pr-10 pl-10
        border border-[#9DA4AE] rounded-sm
        text-right text-sm outline-none
        focus:ring-2 focus:ring-primary"
      />

      <span id="Microphone icon" 
      class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 13.9583C12.6463 13.9583 14.7916 11.813 14.7916 9.16666V5.83332C14.7916 3.18696 12.6463 1.04166 9.99998 1.04166C7.35362 1.04166 5.20831 3.18696 5.20831 5.83332V9.16666C5.20831 11.813 7.35362 13.9583 9.99998 13.9583ZM9.99998 2.29166C8.04397 2.29166 6.45831 3.87731 6.45831 5.83332V9.16666C6.45831 11.1227 8.04397 12.7083 9.99998 12.7083C11.7427 12.7083 13.1915 11.4496 13.4867 9.79166H11.6666C11.3215 9.79166 11.0416 9.51183 11.0416 9.16666C11.0416 8.82148 11.3215 8.54166 11.6666 8.54166H13.5416V6.45832H11.6666C11.3215 6.45832 11.0416 6.1785 11.0416 5.83332C11.0416 5.48814 11.3215 5.20832 11.6666 5.20832H13.4867C13.1915 3.5504 11.7427 2.29166 9.99998 2.29166Z" fill="#161616"/>
      <path d="M3.95831 9.16666C3.95831 8.82148 3.67849 8.54166 3.33331 8.54166C2.98814 8.54166 2.70831 8.82148 2.70831 9.16666C2.70831 12.9832 5.64048 16.1149 9.37498 16.4319V17.7083H7.49998C7.1548 17.7083 6.87498 17.9881 6.87498 18.3333C6.87498 18.6785 7.1548 18.9583 7.49998 18.9583H12.5C12.8452 18.9583 13.125 18.6785 13.125 18.3333C13.125 17.9881 12.8452 17.7083 12.5 17.7083H10.625V16.4319C14.3595 16.1149 17.2916 12.9832 17.2916 9.16666C17.2916 8.82148 17.0118 8.54166 16.6666 8.54166C16.3215 8.54166 16.0416 8.82148 16.0416 9.16666C16.0416 12.5034 13.3367 15.2083 9.99998 15.2083C6.66326 15.2083 3.95831 12.5034 3.95831 9.16666Z" fill="#161616"/>
      </svg>
      </span>

    </div>

<button
  type="submit"
  class="flex items-center justify-center gap-1.5
  w-full sm:w-auto h-10 px-6
  bg-gray-100 rounded-sm text-text-dark"
  aria-label="تنفيذ البحث في المستودع الرقمي">
  بحث
</button>


  </form>

</article>


    </section>
  `,
styleUrl: './hero-section.css',
})
export class HeroSection {}
