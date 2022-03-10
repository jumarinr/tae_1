import colors from '@mui/material/colors';
import makeStyles from '@mui/styles/makeStyles';

const styles = makeStyles(() => ({
  emptyInput: {
    display: 'none',
  },
  infoFormat: {
    fontSize: 'small',
    color: colors.grey[500],
  },
  buttonDiv: {
    float: 'right',
  },
  button: {
    textTransform: 'none',
  },

}));

export default styles;
