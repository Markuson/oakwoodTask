import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '60vh',
        overflow:'auto'
    },

    InfoContainer: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'left',
        justifyContent: 'space-around',
        width: '80vw',
        height: '60vh',
    },

    Content: {
        minHeight: '20vh'
    },

    '@media (max-width: 450px)': {
        Content: {
            minHeight: '10vh'
        }
    },
},
    {
        link: true
    })

export default useStyles