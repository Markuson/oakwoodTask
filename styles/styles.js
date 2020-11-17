import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Container: {
    minHeight: '90vh',
    padding: '0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  Main: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'auto'
  },

  Footer: {
    width: '100%',
    height: '10vh',
    borderTop: [1, 'solid', '#eaeaea'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

},
{
    link: true
})

export default useStyles
