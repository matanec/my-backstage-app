import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="90" width="181" version="1.1">
      <path 
      className={classes.path}
      d="m 117.2,23.2 -112.7,0 0,43.5 112.7,0 0,18.1 c 0,0 59.3,-39.9 59.3,-39.9 L 117.2,5 v 18.1 z" 
      />
    </svg>
  );
};

export default LogoFull;
