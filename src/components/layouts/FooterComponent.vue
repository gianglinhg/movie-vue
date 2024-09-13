<template>
  <section class="bg-[url('/images/services_bg.jpg')] bg-cover bg-no-repeat">
    <div class="container px-4 py-20 mx-auto">
      <div class="flex flex-col items-center justify-between gap-10 pb-5 mb-5 border-b-2 md:flex-row border-gray">
        <div class="w-40 cursor-pointer">
          <img src="/images/logo.png" class="object-cover w-full h-full" alt="logo">
        </div>
        <div>
          <ul class="flex flex-row gap-x-5 md:gap-x-20 lg:p-0">
            <li>
              <a href="#" class="font-semibold item__menu">Home</a>
            </li>
            <li>
              <a href="#" class="font-semibold item__menu">About</a>
            </li>
            <li>
              <a href="#" class="font-semibold item__menu">Feature</a>
            </li>
            <li>
              <a href="#" class="font-semibold item__menu">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center md:justify-between md:flex-row">
        <ul class="flex gap-x-5 md:gap-x-10">
          <li>
            <a href="#" class="text-xs item__menu">Faq</a>
          </li>
          <li>
            <a href="#" class="text-xs item__menu">Help Center</a>
          </li>
          <li>
            <a href="#" class="text-xs item__menu">Terms of Use</a>
          </li>
          <li>
            <a href="#" class="text-xs item__menu">Privacy</a>
          </li>
        </ul>
        <ul class="flex items-center p-5 gap-x-2">
          <li>
            <a href="#" class="flex items-center justify-center rounded-full size-8 bg-gray item__menu">
              <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-sm" />
            </a>
          </li>

          <li>
            <a href="#" class="flex items-center justify-center rounded-full size-8 bg-gray item__menu">
              <font-awesome-icon :icon="['fab', 'twitter']" class="text-sm" />
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center rounded-full size-8 bg-gray item__menu">
              <font-awesome-icon :icon="['fab', 'pinterest-p']" class="text-sm" />
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center rounded-full size-8 bg-gray item__menu">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-sm" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>