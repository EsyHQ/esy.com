const mainTheme = {
    type: 'mainTheme',

    container: {
        maxWidth: '1300px',
        flexFlow: 'row nowrap',
    },

    title: {
        fontSize: '32px',
    },

    featuredImg: {
        maxWidth: '742px',
        maxHeight: '415px'
    },
    postCardTitle: {
        margin: '0 0 10px 0'
    },
      postCardContent: {
        padding: '0 2%',
    }
}


const midTheme = {
    type: 'midTheme',
    container: {
        maxWidth: '625px',
        maxHeight: '300px',
        flexFlow: 'row wrap',
    },
    title: {
        fontSize: '22px',
    },
    featuredImg: {
        maxWidth: '625px',
        maxHeight: '227px',
        objectFit: 'cover',
        // objectPosition: '0 20%',
    },
    postCardTitle: {
        margin: '20px 0 0 0'
    },
    postCardContent: {
        padding: '0',
    },
}

const thumbnailTheme = {
    type: 'thumbnailTheme',
    container: {
        maxWidth: '400px',
        flexFlow: 'row wrap',
    },
    title: {
        fontSize: '22px',
    },
    featuredImg: {
        maxWidth: '400px',
        maxHeight: '195px'
    },
    postCardTitle: {
        margin: '20px 0 0 0'
    },
      postCardContent: {
        padding: '0',
    }

}


export { mainTheme, midTheme, thumbnailTheme }