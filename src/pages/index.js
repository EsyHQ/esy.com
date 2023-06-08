import React from 'react'

import HomeContainer from 'src/components/Page/Home/container'
import SEO from '../components/SEO'


const meta = {
    title: 'esy - The Smart Journal',
    description: 'Esy is a digital journaling platform that offers users a suite of analytical tools for writing rich and expressive essays.',
}


const HomePage = () => {
    return <HomeContainer />
}

export default HomePage


export const Head = () => {
    return <SEO meta={meta} />
}