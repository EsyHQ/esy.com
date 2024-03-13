import React from 'react'
import { graphql } from 'gatsby'
import { BlogWrapper } from 'src/components/Page/Learn/styles'
import Layout from "src/components/Layout"
import PostList from 'src/components/Post/postList'
import SEO from 'src/components/SEO'
import { useSiteMetadata } from 'src/hooks/use-site-metadata'


export default function BlogIndexPage({ data }) {
    const { edges } = data?.allMarkdownRemark

    return (<Layout>
        
<header>
    <nav id="mainNavbar" data-sticky="false" class="dark:bg-transparent bg-transparent border-gray-200 py-2.5 fixed w-full z-30 top-0 start-0 data-[sticky=true]:bg-white data-[sticky=true]:border-b dark:data-[sticky=true]:bg-gray-800 dark:data-[sticky=true]:border-gray-700">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4">
            <a href="http://localhost:1313/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div class="flex items-center lg:order-2">
                 <button id="themeToggle" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-2.5">
                    <svg id="themeToggleDarkIcon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg id="themeToggleLightIcon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </button>
                  <div id="tooltip-toggle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      Toggle dark mode
                      <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                <button data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-0 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                    </svg>
                    View pages
                </button>
                <button id="mobile-menu-button" data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent mt-2 lg:mt-0" id="mobile-menu-2">
                <ul class="flex flex-col rounded-lg font-medium lg:flex-row lg:space-x-8">
                    <li>
                        <a href="http://localhost:1313/" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:1313/services/services-1/" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="http://localhost:1313/about/about-1/" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="http://localhost:1313/pricing/pricing-1/" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                    </li>
                    <li>
                        <a href="http://localhost:1313/team/team-1/" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                    </li>
                    <li>
                        <a href="http://localhost:1313/blog/homepage/" class="block py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                    </li>
                    <li>
                        <a href="http://localhost:1313/contact/contact-1/" class="block py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>





<div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">All pages</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
  <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-landings" data-collapse-toggle="dropdown-landings">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Landings</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-landings" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/landing/agency/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Agency</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/landing/mobile-application/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Mobile app</a>
                  </li>
                  <li>
                    <a href="http://localhost:1313/landing/digital-product/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Digital product</a>
                  </li>
                  <li>
                    <a href="http://localhost:1313/landing/saas/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">SaaS product</a>
                  </li>
                  <li>
                    <a href="http://localhost:1313/landing/open-source/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Open-source</a>
                 </li>
                 <li>
                    <a href="http://localhost:1313/landing/pre-launch/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pre-launch page</a>
                 </li>
                 <li>
                    <a href="http://localhost:1313/landing/physical-product/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Physical product</a>
                 </li>
                  <li>
                     <a href="http://localhost:1313/landing/crypto/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Crypto exchange</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/landing/event/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Event schedule</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/landing/ngo/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">NGO presentation</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-about" data-collapse-toggle="dropdown-about">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">About</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-about" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/about/about-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About feature list</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/about/about-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About with video</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/about/about-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About with statistics</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-services" data-collapse-toggle="dropdown-services">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                        <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                    </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Services</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-services" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/services/services-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Services feature icons</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/services/services-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Services with images</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/services/services-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Services image cards</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/services/services-4/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Services statistics</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-team" data-collapse-toggle="dropdown-team">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg> 
                 <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Team</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-team" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/team/team-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Team hover cards</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/team/team-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Team profile cards</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/team/team-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Team masonry grid</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/team/team-4/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Team outline cards</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pricing" data-collapse-toggle="dropdown-pricing">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
                    <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Pricing</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-pricing" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/pricing/pricing-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing single plan</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/pricing/pricing-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing three plans</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/pricing/pricing-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing price toggle</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/pricing/pricing-4/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing comparison</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-contact" data-collapse-toggle="dropdown-contact">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Contact</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-contact" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/contact/contact-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact with search</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/contact/contact-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact with FAQ</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/contact/contact-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact with image</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/contact/contact-4/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact with options</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-blog" data-collapse-toggle="dropdown-blog">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 20">
                    <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z"/>
                    <path d="M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Blog</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-blog" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/blog/homepage/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Main page</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/blog/article/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Article page</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-testimonials" data-collapse-toggle="dropdown-testimonials">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                  </svg>
                <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Testimonials</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-testimonials" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/testimonials/testimonials-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Testimonial statistics</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/testimonials/testimonials-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Testimonial cards</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-portfolio" data-collapse-toggle="dropdown-portfolio">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
                <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Portfolio</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                  
            </button>
            <ul id="dropdown-portfolio" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/portfolio/project-showcase/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Project Showcase</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-auth" data-collapse-toggle="dropdown-auth">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 18">
                    <path d="M8 18A18.55 18.55 0 0 1 0 3l8-3 8 3a18.549 18.549 0 0 1-8 15Z"/>
                </svg>
                <span class="flex-1 text-left rtl:text-right whitespace-nowrap ms-3">Authentication</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <ul id="dropdown-auth" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/authentication/login-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Login feature list</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/login-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Login illustration</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/login-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Login background</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/register-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Register feature list</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/register-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Register illustration</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/register-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Register background</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-forgot" data-collapse-toggle="dropdown-forgot">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"/>
                </svg>
                <span class="flex-1 text-left rtl:text-right whitespace-nowrap ms-3">Forgot password</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <ul id="dropdown-forgot" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/authentication/forgot-password-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Feature list</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/forgot-password-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Illustration</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/authentication/forgot-password-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Background image</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-reset" data-collapse-toggle="dropdown-reset">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                </svg>
                <span class="flex-1 text-left rtl:text-right whitespace-nowrap ms-3">Reset password</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <ul id="dropdown-reset" class="hidden py-2 space-y-2">
               <li>
                  <a href="http://localhost:1313/authentication/reset-password-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Feature list</a>
               </li>
               <li>
                  <a href="http://localhost:1313/authentication/reset-password-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Illustration</a>
               </li>
               <li>
                  <a href="http://localhost:1313/authentication/reset-password-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Background image</a>
               </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-status" data-collapse-toggle="dropdown-status">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Status</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-status" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/status/404-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">404 with search</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/status/404-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">404 with illustration</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/status/404-3/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">404 with home button</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/status/500-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">500 with illustration</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/status/500-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">500 with background</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-legal" data-collapse-toggle="dropdown-legal">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 20">
                    <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z"/>
                    <path d="M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z"/>
                  </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Legal</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-legal" class="hidden py-2 space-y-2">
                  <li>
                     <a href="http://localhost:1313/legal/terms-1/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Page with sidebar</a>
                  </li>
                  <li>
                     <a href="http://localhost:1313/legal/terms-2/" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Page with contact</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-resources" data-collapse-toggle="dropdown-resources">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                     <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                   </svg>
                  <span class="flex-1 text-left rtl:text-right whitespace-nowrap ml-4">Resources</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-resources" class="hidden py-2 space-y-2">
                  <li>
                     <a href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Flowbite Library</a>
                  </li>
                  <li>
                     <a href="https://flowbite.com/blocks/" target="_blank" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Flowbite Blocks</a>
                  </li>
                  <li>
                     <a href="https://flowbite.com/figma/" target="_blank" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Flowbite Figma</a>
                  </li>
                  <li>
                     <a href="https://flowbite.com/icons/" target="_blank" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Flowbite Icons</a>
                  </li>
                  <li>
                     <a href="https://chat.openai.com/g/g-y7yC35HB9-flowbite-gpt" target="_blank" class="flex items-center w-full p-2 pl-11 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Flowbite GPT</a>
                  </li>
            </ul>
         </li>
      </ul>
   </div>
</div>

  
  <main class="w-full antialiased">
    
<section class="border-t border-b border-gray-100 bg-primary dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24 pt-20 sm:pt-24 lg:pt-32">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
      <article>
        <a href="#" title="">
          <img class="object-cover w-full rounded-lg" src="http://localhost:1313//images/hero/blog-image.png" alt="blog image" />
        </a>

        <div class="mt-5 space-y-4">
          <span
            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
            Programming
          </span>

          <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white hover:underline">
            <a href="#" title="">
              Releasing code in large corporations is slow - and there is a good reason for it
            </a>
          </h2>

          <div class="flex items-center gap-3">
            <img class="w-8 h-8 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="" />
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
            One of the things I always loved about the web is its immediacy. You write a piece of code, publish it
            somewhere and
            people can access it.
          </p>

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
      </article>

      <div class="space-y-8">
        <article>
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

            <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white hover:underline">
              <a href="#" title="">
                How to rank higher on Google (6 easy steps)
              </a>
            </h2>

            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
              tools that even
              influence both web designers and developers.
            </p>

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
        </article>

        <article>
          <div class="space-y-4">
            <span
              class="bg-pink-100 text-pink-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clip-rule="evenodd" />
              </svg>
              Interview
            </span>

            <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white hover:underline">
              <a href="#" title="">
                How to schedule your tweets to send later
              </a>
            </h2>

            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
              tools that even.
            </p>

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
        </article>

        <article>
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

            <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white hover:underline">
              <a href="#" class="hover:underline" title="">
                12 SEO best practices that everyone should follow
              </a>
            </h2>

            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis.
            </p>

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
        </article>
      </div>
    </div>
  </div>
</section>

<section class="bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800">
  <div class="max-w-screen-xl px-4 py-4 mx-auto ">
    <div class="sm:hidden">
      <label for="category" class="sr-only">
        Select a category
      </label>
      <select id="category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>
          Select a category
        </option>
        <option value="" selected>
          All categories
        </option>
        <option value="">
          Video
        </option>
        <option value="">
          Interview
        </option>
        <option value="">
          Marketing
        </option>
      </select>
    </div>

    <div class="hidden sm:block">
      <nav class="flex flex-wrap items-center gap-3">
        <a href="#" title=""
          class="px-5 py-2 text-base font-medium border rounded-full text-primary-700 border-primary-700 hover:bg-primary-50 dark:text-primary-500 dark:border-primary-500 dark:hover:bg-primary-900">
          All categories
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Video
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Interview
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Marketing
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          UI/UX
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Tech
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Programming
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Design
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Productivity
        </a>

        <a href="#" title=""
          class="px-5 py-2 text-base font-medium text-gray-900 border border-transparent rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100">
          Tutorials
        </a>
      </nav>
    </div>
  </div>
</section>

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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-1.png" alt=""
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
                  src="http://localhost:1313//images/users/michael-gough.png" alt="" />
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-2.png" alt=""
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
                  src="http://localhost:1313//images/users/thomas-lean.png" alt="" />
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-3.png" alt=""
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
                  src="http://localhost:1313//images/users/bonnie-green.png" alt="" />
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-4.png" alt=""
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
                  src="http://localhost:1313//images/users/helene-engels.png" alt="" />
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-5.png" alt=""
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
                  src="http://localhost:1313//images/users/lana-byrd.png" alt="" />
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

          <div class="flex flex-col items-start gap-8 xl:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
              <img src="http://localhost:1313//images/blog/blog-thumbnail-6.png" alt=""
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
                  src="http://localhost:1313//images/users/michael-gough.png" alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Micheal Gough
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
                    345 Comments
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-7.png" alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-pink-100 text-pink-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clip-rule="evenodd" />
                </svg>
                Interview
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  Best React libraries around the web
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src="http://localhost:1313//images/users/joseph-mcfall.png" alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Joseph McFall
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 27
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
                    186 Comments
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-8.png" alt=""
                class="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
            </div>

            <div class="space-y-4">
              <span
                class="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                UI/UX
              </span>

              <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" class="hover:underline" title="">
                  Simple ways to make online content more accessible (and why it matters)
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src="http://localhost:1313//images/users/leslie-livingston.png" alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Karen Nelson
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 27
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
                    64 Comments
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-9.png" alt=""
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
                  src="http://localhost:1313//images/users/robert-brown.png" alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Robert Brown
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 27
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
                    71 Comments
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
              <img src="http://localhost:1313//images/blog/blog-thumbnail-10.png" alt=""
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
                  Top 6 design trends to look out for in 2023
                </a>
              </h2>

              <div class="flex items-center gap-3">
                <img class="w-8 h-8 rounded-full"
                  src="http://localhost:1313//images/users/lana-byrd.png" alt="" />
                <div class="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                  <div>
                    Lana Byrd
                  </div>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 27
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

      <div class="w-full max-w-xs space-y-8 shrink-0 md:top-20 md:sticky">
        <div class="rounded-lg bg-gray-50 dark:bg-gray-800">
          <div class="p-5 space-y-5">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input type="text" id="simple-search"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search" required />
              </div>
            </form>

            <h5 class="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-white">
              Recommended topics
            </h5>
            <div class="flex flex-wrap items-center gap-4">
              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Technology
              </span>

              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Money
              </span>

              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Art
              </span>

              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Productivity
              </span>

              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Psychology
              </span>

              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Design
              </span>

              <span
                class="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300">
                Mindfulness
              </span>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-gray-50 dark:bg-gray-800">
          <div class="p-5 space-y-5">
            <h5 class="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-white">
              Who to follow
            </h5>

            <ul class="space-y-4">
              <li class="flex items-start gap-2.5">
                <img class="object-cover w-6 h-6 rounded-full shrink-0"
                  src="http://localhost:1313//images/users/bonnie-green.png" alt="" />
                <div class="flex-1 min-w-0">
                  <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    Web Designer
                  </p>
                </div>

                <button type="button"
                  class="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Follow
                </button>
              </li>

              <li class="flex items-start gap-2.5">
                <img class="object-cover w-6 h-6 rounded-full shrink-0" src="http://localhost:1313//images/users/jese-leos.png"
                  alt="" />
                <div class="flex-1 min-w-0">
                  <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Jese Leos
                  </p>
                  <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    Web Develoeper
                  </p>
                </div>

                <button type="button"
                  class="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Follow
                </button>
              </li>

              <li class="flex items-start gap-2.5">
                <img class="object-cover w-6 h-6 rounded-full shrink-0"
                  src="http://localhost:1313//images/users/thomas-lean.png" alt="" />
                <div class="flex-1 min-w-0">
                  <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Thomas Lean
                  </p>
                  <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    CEO at Flowbite
                  </p>
                </div>

                <button type="button"
                  class="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Follow
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="rounded-lg bg-gray-50 dark:bg-gray-800">
          <div class="p-5 space-y-5">
            <h5 class="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-white">
              Follow us
            </h5>

            <ul class="space-y-4">
              <li>
                <a href="#" title=""
                  class="flex items-center gap-2.5 text-base font-semibold hover:underline text-gray-900 dark:text-white">
                  <svg class="w-6 h-6 fill-[#1DA1F2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
                    </path>
                  </svg>
                  Twitter
                </a>
              </li>

              <li>
                <a href="#" title=""
                  class="flex items-center gap-2.5 text-base font-semibold hover:underline text-gray-900 dark:text-white">
                  <svg class="w-6 h-6 fill-[#1877F2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z">
                    </path>
                  </svg>
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" title=""
                  class="flex items-center gap-2.5 text-base font-semibold hover:underline text-gray-900 dark:text-white">
                  <svg class="w-6 h-6 fill-[#111928]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11.1731 9.79959C11.1731 12.68 8.85817 15.015 6.00267 15.015C3.14717 15.015 0.832031 12.6795 0.832031 9.79959C0.832031 6.91971 3.147 4.58398 6.00267 4.58398C8.85835 4.58398 11.1731 6.91918 11.1731 9.79959Z" />
                    <path
                      d="M16.8453 9.7996C16.8453 12.5109 15.6878 14.7097 14.26 14.7097C12.8321 14.7097 11.6746 12.5109 11.6746 9.7996C11.6746 7.08831 12.832 4.8895 14.2598 4.8895C15.6876 4.8895 16.8453 7.08761 16.8453 9.7996Z" />
                    <path
                      d="M19.1654 9.79959C19.1654 12.2282 18.7583 14.1983 18.2561 14.1983C17.7539 14.1983 17.347 12.2288 17.347 9.79959C17.347 7.37041 17.754 5.40092 18.2561 5.40092C18.7582 5.40092 19.1654 7.37024 19.1654 9.79959Z" />
                  </svg>
                  Medium
                </a>
              </li>

              <li>
                <a href="#" title=""
                  class="flex items-center gap-2.5 text-base font-semibold hover:underline text-gray-900 dark:text-white">
                  <svg class="w-6 h-6 fill-[#CD486B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
                    </path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path
                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
                    </path>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img class="object-cover w-full rounded-lg dark:hidden" src="http://localhost:1313//images/placeholder-image.png"
            alt="" />
          <img class="hidden object-cover w-full rounded-lg dark:block"
            src="http://localhost:1313//images/placeholder-image-dark.png" alt="" />
          <p class="mt-3 text-base font-normal text-gray-500 dark:text-gray-400">
            Students and Teachers, save up to 60% on Adobe Creative Cloud.
          </p>
          <a href="#" title="" class="text-xs block mt-1.5 font-medium text-gray-400 uppercase dark:">
            Ads placeholder
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="border-t border-b border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Stay in touch
      </h2>
      <p class="max-w-xl mx-auto mb-6 text-gray-500 md:text-lg dark:text-gray-400">
        Stay up to date with the roadmap
        progress,
        announcements and
        exclusive discounts feel free to sign up with your email.
      </p>

      <form action="#" class="max-w-lg mx-auto">
        <div class="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
          <div class="relative w-full">
            <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
              address</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              class="block w-full p-3 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your email" type="email" id="email" required="" />
          </div>
          <div>
            <button type="submit"
              class="w-full px-5 py-3 text-sm font-medium text-center text-white border rounded-lg cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:focus:ring-primary-800">Subscribe</button>
          </div>
        </div>

        <div class="text-sm text-left text-gray-500 dark:text-gray-300">We care about the protection of
          your data. Read our <a href="#" class="text-gray-900 underline dark:text-white hover:no-underline">Privacy
            Policy</a>.
        </div>
      </form>
    </div>
  </div>
</section>

  </main>
  
    
            </Layout>)
}





export const indexQuery = graphql`
    query BlogIndexQuery  {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { journal_name: { eq: "learn" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            slug
                            journal_name
                            excerpt
                            featuredImagePath
                            featuredImage {
                                childImageSharp {
                                    gatsbyImageData(width: 800)
                                }
                            }
                        }
                    }
                }
            }
      }
`



export const Head = () => {
    const { description, image, siteUrl, type, twitterUsername } = useSiteMetadata()

    const meta = {
        title: "Learn | esy",
        description,
        image,
        url: `${siteUrl}/blog`,
        type,
        twitterUsername,
    }

    return <SEO meta={meta} />
}
