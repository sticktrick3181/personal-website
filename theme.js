import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const gray = {
  100: '#F7FAFC',
  200: '#EDF2F7',
  300: '#E2E8F0',
  400: '#CBD5E0',
  500: '#A0AEC0',
  600: '#718096',
  700: '#4A5568',
  800: '#2D3748',
  900: '#1A202C',
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    gray,
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: gray[900],
      },
    },
  },
})

export default theme
