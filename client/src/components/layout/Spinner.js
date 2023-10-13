/* eslint-disable react/display-name */
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '60px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);
