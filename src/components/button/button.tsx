import React from "react";
import antd from "antd";

function Button(props: any) {
  React.useEffect(() => {
    console.log(btnRef.current);
  }, []);

  const btnRef = React.useRef();

  return (
    <div className="hx-button" ref={btnRef}>
      <div>
        <div>
          <antd.Button {...props}>{props.children}</antd.Button>
        </div>
      </div>
    </div>
  );
}

Button.Group = antd.Button.Group;
Button.__ANT_BUTTON = true;

export default Button;
