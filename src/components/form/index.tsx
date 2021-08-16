import antd from "antd";
import Form from "./Form";
import Item from "./FormItem";

Form.Item = Item;
Form.List = antd.Form.List;
Form.ErrorList = antd.Form.ErrorList;
Form.useForm = antd.Form.useForm;
Form.Provider = antd.Form.FormProvider;
Form.create = antd.Form.create;

export default Form;
