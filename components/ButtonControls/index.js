import IconTextButton from '../IconTextButton'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import useStyles from './styles'

export default function ButtonControls({ index, onDecrement, onIncrement }){

    const classes = useStyles();
    return <div className={classes.Content}>
        <IconTextButton
            onClick={onDecrement}
            styles={{
                fontColor: 'black',
                hoverFontColor: 'white',
                hoverPrimaryColor: 'black',
                primaryColor: 'white'
            }}
        >
            <RemoveIcon fontSize="inherit" />&nbsp;<p> decrement</p>
        </IconTextButton>

        <p>Counter: {index}</p>

        <IconTextButton
            onClick={onIncrement}
            styles={{
                fontColor: 'white',
                hoverFontColor: 'white',
                hoverPrimaryColor: 'rebeccapurple',
                primaryColor: 'hotpink'
            }}
        >
            <AddIcon fontSize="inherit" />&nbsp;<p> increment</p>
        </IconTextButton>
    </div>
}
