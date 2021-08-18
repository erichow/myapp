import antd from "antd";
import "./index.scss";

function Tabs(props: any) {
  return (
    <antd.Tabs {...props} className="hx-tabs">
      {props.children}
    </antd.Tabs>
  );
}

Tabs.TabPane = antd.Tabs.TabPane;

export default Tabs;
