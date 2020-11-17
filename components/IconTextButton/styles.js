import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Button: {
        backgroundColor: (props) => props.primaryColor,
        color: (props) => props.fontColor,
        margin: '0 0.5rem',
        width: '10rem',
        height: '3rem',
        border: (props) => [
            [1, 'solid', props.primaryColor == 'white' ? 'black': props.primaryColor]
        ],
        borderRadius:'1.5rem',
        fontSize:'0.80rem',
        textAlign: 'center',
        textTransform:'uppercase',
        "&:focus":{
            outlineStyle: 'none',
        },
        "&:hover": {
            backgroundColor: (props) => props.hoverPrimaryColor,
            color: (props) => props.hoverFontColor,
        },
    },
    Content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
},
{
    link: true
  })

export default useStyles