import antd from "antd";
import _ from "lodash";

function Tooltip(props) {
  const color = _.merge("red", props.color);
  const placement = _.merge("right", props.placement);

  return (
    <antd.Tooltip {...props} color={color} placement={placement}>
      {props.children}
    </antd.Tooltip>
  );
}

export default Tooltip;
