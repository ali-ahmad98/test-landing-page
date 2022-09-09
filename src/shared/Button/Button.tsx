import React from "react";

import "./Button.scss";

interface Ibutton {
  text: string;
  color?: string;
  icon?: any;
  onClick?: (e: any) => void;
}

const Button = (props: Ibutton) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: `${props.color}` }}
      onClick={props.onClick}
    >
      {props.text} <span>{props.icon}</span>
    </button>
  );
};

export default Button;
