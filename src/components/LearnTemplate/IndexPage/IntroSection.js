import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import EmailIcon from 'src/components/Icons/emailIcon';
import BeeHiivSlim from 'src/components/BeeHiivEmbed/slim';

export default function IntroSection({ title = "School", descriptionStart, descriptionEnd, image }) {
    return (
        <section className="bg-white dark:bg-gray-900 pt-[100px] lg:pt-[50px] pl-[35px]">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className=" text-secondary">Esy</span> {title}</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{descriptionStart}<br />{descriptionEnd}</p>
           
                    <BeeHiivSlim />
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

