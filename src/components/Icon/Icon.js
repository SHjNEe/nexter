import React from "react";
import icon from "../../img/sprite.svg";

const Icon = (props) => {
  function onClickHandler() {
    props.onClick();
  }

  return (
    <svg onClick={onClickHandler} className={props.cls}>
      <use xlinkHref={`${icon}#${props.name}`} />
    </svg>
  );
};
export default Icon;
