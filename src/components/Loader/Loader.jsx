import React from 'react';
import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.wrapper}>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="#6ba3de79"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  </div>
);

export default Loader;
