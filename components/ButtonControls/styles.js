import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height: '30vh'
    },

    '@media (max-width: 450px)': {
        Content: {
          flexFlow: 'column-reverse',
          width:'100%'
        }
    },
},
    {
        link: true
    })

export default useStyles