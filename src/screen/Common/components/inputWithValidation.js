import React from 'react';

export default function inputWithValidation(props) {
  return (
    <div className={`popup ${props.wrapperClass}`}>
      <input
        {...props.input}
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${props.meta.touched && props.meta.error ? ' input_error' : null}`}
      />
      <span className={`popuptext ${props.meta.touched && props.meta.error && props.meta.active ? 'show' : null}`}>
        {props.meta.error}
      </span>
    </div>
  );
}
