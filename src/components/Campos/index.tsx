import { Label, Alert } from "reactstrap";
import { Field } from "formik";
import { InputType } from "reactstrap/types/lib/Input";

interface CampoFormularioProps {
  htmlFor: string;
  label: string;
  type: InputType;
  id: string;
  name: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  errors: any;
  touched: any;
}

export function CampoFormulario(props: CampoFormularioProps) {
  return (
    <div className="d-flex flex-column">
      <Label className="form-label fw-bold" htmlFor={props.htmlFor}>{props.label}</Label>
      <Field
        className="form-control"
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder} />
      {props.errors && props.touched ? <Alert color="danger">{props.errors}</Alert> : null}
    </div>
  );
}
