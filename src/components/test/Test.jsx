import React from 'react';
import PropTypes from 'prop-types';

const Test = ({ msg }) => (
  <p className="test">{msg}</p>
);

Test.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Test;
