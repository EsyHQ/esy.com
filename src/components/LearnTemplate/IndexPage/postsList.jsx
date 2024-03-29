import React from 'react';


// Blog thumbnail images
import BlogThumbnail1 from 'src/images/blog/blog-thumbnail-1.png';
import BlogThumbnail2 from 'src/images/blog/blog-thumbnail-2.png';
import BlogThumbnail3 from 'src/images/blog/blog-thumbnail-3.png';
import BlogThumbnail4 from 'src/images/blog/blog-thumbnail-4.png';
import BlogThumbnail5 from 'src/images/blog/blog-thumbnail-5.png';
import BlogThumbnail6 from 'src/images/blog/blog-thumbnail-6.png';
import BlogThumbnail7 from 'src/images/blog/blog-thumbnail-7.png';
import BlogThumbnail8 from 'src/images/blog/blog-thumbnail-8.png';
import BlogThumbnail9 from 'src/images/blog/blog-thumbnail-9.png';
import BlogThumbnail10 from 'src/images/blog/blog-thumbnail-10.png';

// Blog post images
import BlogImage1 from 'src/images/blog/image-1.jpg';
import BlogImage2 from 'src/images/blog/image-2.jpg';
import BlogImage3 from 'src/images/blog/image-3.jpg';

// User avatar images
import UserBonnieGreen from 'src/images/users/bonnie-green.png';
import UserHeleneEngels from 'src/images/users/helene-engels.png';
import UserJosephMcfall from 'src/images/users/joseph-mcfall.png';
import UserLanaByrd from 'src/images/users/lana-byrd.png';
import UserLeslieLivingston from 'src/images/users/leslie-livingston.png';
import UserMichaelGough from 'src/images/users/michael-gough.png';
import UserRobertBrown from 'src/images/users/robert-brown.png';
import UserThomasLean from 'src/images/users/thomas-lean.png';

import Sidebar from './sidebar';


export default function PostsList ({ posts }) {
    return (
        <section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:pb-16">
    <div class="flex flex-col gap-12 lg:gap-20 md:flex-row md:items-start">
      <div class="flex-1 min-w-0">
        <div class="border-b border-gray-100 dark:border-gray-800">
          <nav class="flex items-center gap-8 pb-4 -mb-px">
            <a href="#" title=""
              class="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Relevant
            </a>

            <a href="#" title="" class="text-base font-medium text-primary-700 dark:text-primary-500">
              Latest
            </a>

            <a href="#" title=""
              class="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Top
            </a>
          </nav>
        </div>

        <div class="mt-8 space-y-12 sm:mt-12">
          <div class="flex flex-col items-start gap-8 xl:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
              <img src={BlogThumbnail1} alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                Programming
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  How to quickly deploy a static website
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src={UserMichaelGough} alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Micheal Gough
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 31
                  </div>
                </div>
              </div>

              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
                tools that even
                influence both web designers and developers.
              </p>

              <div class="flex items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clip-rule="evenodd" />
                    </svg>
                    14 Comments
                  </button>

                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save
                  </button>
                </div>

                <a href="#" title=""
                  class="inline-flex items-center text-base font-semibold leading-tight text-primary-700 hover:underline dark:text-primary-500">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-8 xl:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
              <img src={BlogThumbnail2} alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clip-rule="evenodd" />
                </svg>
                Design
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  Good bot design means never having to say: “I’m sorry, I didn’t get that”
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src={UserThomasLean} alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Thomas Lean
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 31
                  </div>
                </div>
              </div>

              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
                tools that even
                influence both web designers and developers.
              </p>

              <div class="flex items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clip-rule="evenodd" />
                    </svg>
                    24 Comments
                  </button>

                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save
                  </button>
                </div>

                <a href="#" title=""
                  class="inline-flex items-center text-base font-semibold leading-tight text-primary-700 hover:underline dark:text-primary-500">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-8 xl:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
              <img src={BlogThumbnail3} alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                Productivity
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  What we’re reading: Your recommendations from across Flowbite
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src={UserBonnieGreen} alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Bonnie Green
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 30
                  </div>
                </div>
              </div>

              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
                tools that even
                influence both web designers and developers.
              </p>

              <div class="flex items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clip-rule="evenodd" />
                    </svg>
                    92 Comments
                  </button>

                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save
                  </button>
                </div>

                <a href="#" title=""
                  class="inline-flex items-center text-base font-semibold leading-tight text-primary-700 hover:underline dark:text-primary-500">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-8 xl:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
              <img src={BlogThumbnail4} alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd" />
                </svg>
                Tutorial
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  How we built Flowbite Design System
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src={UserHeleneEngels} alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Helen Engels
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 30
                  </div>
                </div>
              </div>

              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
                tools that even
                influence both web designers and developers.
              </p>

              <div class="flex items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clip-rule="evenodd" />
                    </svg>
                    7 Comments
                  </button>

                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save
                  </button>
                </div>

                <a href="#" title=""
                  class="inline-flex items-center text-base font-semibold leading-tight text-primary-700 hover:underline dark:text-primary-500">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-8 xl:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
              <img src={BlogThumbnail5} alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clip-rule="evenodd" />
                </svg>
                Marketing
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  12 SEO best practices that everyone should follow in 2023
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src={UserLanaByrd} alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Karen Nelson
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 29
                  </div>
                </div>
              </div>

              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
                tools that even
                influence both web designers and developers.
              </p>

              <div class="flex items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clip-rule="evenodd" />
                    </svg>
                    84 Comments
                  </button>

                  <button type="button"
                    class="inline-flex gap-1.5 items-center text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save
                  </button>
                </div>

                <a href="#" title=""
                  class="inline-flex items-center text-base font-semibold leading-tight text-primary-700 hover:underline dark:text-primary-500">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Page navigation example" class="mt-8 sm:mt-12">
          <ul class="flex items-center justify-center -space-x-px">
            <li>
              <a href="#"
                class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page"
                class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
              <a href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
              <a href="#"
                class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Sidebar />
    </div>
  </div>
</section>

    )
}

