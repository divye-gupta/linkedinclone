import React from 'react';
import './InputOptions.css';

const InputOptions = ({ title, Icon, color }) => {
  return (
    <div className='InputOptions'>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
