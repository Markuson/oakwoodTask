import useStyles from './styles'

export default function IconTextButton({
    children,
    onClick,
    styles: {
        fontColor,
        hoverFontColor,
        hoverPrimaryColor,
        primaryColor,
    },
}){

    const classes = useStyles({ fontColor, hoverFontColor, hoverPrimaryColor, primaryColor });

    return <button className={classes.Button} onClick={onClick}>
        <span className={classes.Content}>{children}</span>
    </button>
}
