import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import EmailIcon from 'src/components/Icons/emailIcon';

export default function IntroSection() {
    return (
        <section className="bg-white dark:bg-gray-900 pt-[100px] lg:pt-[50px] pl-[35px]">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className=" text-secondary">Esy</span> School</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Enhance your essay writing with AI and prompt engineering.<br />Expert tips delivered to your inbox, no spam.</p>
                    <form action="#" class="mx-auto">
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
                            class="w-full px-5 py-3 text-sm font-medium text-center text-white border rounded-lg cursor-pointer bg-primary border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex">
                    <StaticImage
                        src="https://assets.codepen.io/9394943/learn-creative-clip-art.png" // Adjust the path according to your project structure
                        alt="phone illustration"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}

