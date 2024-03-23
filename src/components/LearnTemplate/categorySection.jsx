import React from 'react';


export default function CategorySection() {
    return (
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
    );
}