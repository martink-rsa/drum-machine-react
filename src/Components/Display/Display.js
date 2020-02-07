import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  displayContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'gray',
    height: '50px',
    width: '350px',
    marginBottom: '20px',
    padding: '0 0 0 20px',
  },
}));

function Display(props) {
  const classes = useStyles();
  const { text } = props;

  return (
    <div id="display" className={classes.displayContainer}>
      {text}
    </div>
  );
}

export default Display;
