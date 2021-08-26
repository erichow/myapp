import React from "react";
import classNames from "classnames";
import "./index.scss";

type BorderPropsType = { type?: String; className?: String; corner: Number };

const defaultBorderPropsType = {
  corner: 14,
};

function Border(props: { type: String; className: String; corner: Number }) {
  React.useEffect(() => {
    const h = borderRef.current.offsetHeight;
    const w = borderRef.current.offsetWidth;

    borderRef.current.style.height =
      (w + h) / Math.sqrt(2) -
      (props.corner === undefined ? 14 : props.corner) +
      "px";
  }, []);

  const borderRef = React.useRef(null);
  const className = classNames(
    "center hx-border",
    { [`hx-border-${props.type}`]: props.type },
    props.className
  );

  return (
    <div className={className}>
      <div ref={borderRef} className="center">
        <div className="center">{props.children}</div>
      </div>
    </div>
  );
}

export default Border;
