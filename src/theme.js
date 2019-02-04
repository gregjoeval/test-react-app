import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';
// import roboto from 'typeface-roboto';

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
