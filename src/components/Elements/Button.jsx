import React from "react";

function Button({
  classname,
  type = "button",
  children,
  onClick = () => {},
  title,
}) {
  return (
    <button className={classname} type={type} onClick={onClick} title={title}>
      {children}
    </button>
  );
}

export default Button;
