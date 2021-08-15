import {createMuiTheme} from '@material-ui/core';
import {red, orange, green } from '@material-ui/core/colors';

const Theme = createMuiTheme ({
    palette: {
        primary: {
            main: red[500]
        },
        secondary: {
            main: orange[500]
        },
        third: {
            main: green[600]
        }
    }
})

export default Theme;