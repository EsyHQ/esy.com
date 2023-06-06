import React from 'react'

import HomeContainer from 'src/components/Page/Home/container'


const HomePage = () => {
    return <HomeContainer />
}

export default HomePage


export const Head = () => {
    console.log('from blog index head')
    return ( <>
       <title>The Smart Journal</title>
     </>)
}