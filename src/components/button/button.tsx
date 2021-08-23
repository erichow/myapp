import React from "react";
import antd from "antd";

function Button(props: any) {
  React.useEffect(() => {
    const h = btnRef.current.offsetHeight;
    const w = btnRef.current.offsetWidth;
    // 切角高度
    btnRef.current.style.height = (w + h) / Math.sqrt(2) - 14 + "px";
  }, []);

  const btnRef = React.useRef(null);

  return (
    <div className="hx-button center" style={props.style}>
      <div ref={btnRef} className="center">
        <div className="center">
          <antd.Button {...props}>{props.children}</antd.Button>
        </div>
      </div>
    </div>
  );
}

Button.Group = antd.Button.Group;
Button.__ANT_BUTTON = true;

export default Button;
