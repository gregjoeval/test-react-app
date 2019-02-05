import {createMuiTheme} from '@material-ui/core/styles';
import {blue, deepOrange, red} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
    error: red
  },
  typography: {
    useNextVariants: true,
  }
});

export default theme;
