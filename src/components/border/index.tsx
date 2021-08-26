import React from "react";
import "./index.scss";

function Border(props: any) {
  React.useEffect(() => {
    const h = borderRef.current.offsetHeight;
    const w = borderRef.current.offsetWidth;
    // 切角高度
    borderRef.current.style.height = (w + h) / Math.sqrt(2) - 10 + "px";
  }, []);

  const borderRef = React.useRef(null);

  return (
    <div {...props} className={`hx-border center ${props.className}`}>
      <div ref={borderRef} className="center">
        <div className="center">{props.children}</div>
      </div>
    </div>
  );
}

export default Border;
