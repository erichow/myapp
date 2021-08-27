import classNames from "classnames";
import antd from "antd";
import Border from "../border";

function Button(props: any) {
  const className = classNames(
    "hx-button",
    `hx-button-${props.type}`,
    props.className
  );
  return (
    <div className={className}>
      <Border type={props.type}>
        <antd.Button
          {...props}
          style={{ flexGrow: 1, border: 0, borderRadius: 0 }}
        >
          {props.children}
        </antd.Button>
      </Border>
    </div>
  );
}

export default Button;
