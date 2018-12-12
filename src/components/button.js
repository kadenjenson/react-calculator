import React from 'react';

function isOperator(val) {
  return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => (
  <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}>
    {props.children}
  </div>
)