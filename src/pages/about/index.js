import React from 'react'
import AboutPageIndex from 'src/components/Page/About'



const AboutPage = ({ location }) => {
    return <AboutPageIndex location={location} />
}

export default AboutPage


export const Head = () => {
    return ( <>
       <title>About | esy</title>
       <meta name="description" content="Hello World" />
     </>)
}
