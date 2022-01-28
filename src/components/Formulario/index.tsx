import { Field, Form, Formik, FormikHelpers } from "formik";
import { AiOutlineSend, AiOutlineClear } from "react-icons/ai";
import { Alert, InputGroup } from "reactstrap";
import { Botao } from "../Botoes";
import * as Yup from "yup";

const validacaoSchema = Yup.object().shape({
  mensagem: Yup.string().required("Campo vazio"),
});

const valoresIniciais: FormularioTypes = {
  mensagem: ""
};

export interface FormularioTypes {
  mensagem: string;
}

interface FormularioProps {
  onSubmit: (values: FormularioTypes, formikHelpers: FormikHelpers<FormularioTypes>) => void;
}

export function Formulario(props: FormularioProps) {
  return (
    <>
      <Formik
        initialValues={valoresIniciais}
        onSubmit={props.onSubmit}
        validationSchema={validacaoSchema}
      >
        {({ errors, values }) => (
          <Form className="d-flex flex-column">
            {(errors.mensagem) ? (
              <Alert
                color="danger"
                className="position-absolute p-1"
                style={{
                  bottom: '30px',
                  width: '300px',
                }}
              >{errors.mensagem}</Alert>) : null}
            <InputGroup>
              <Field name="message" className="form-control" value={values.mensagem} />
              <Botao color="primary" type="submit" className="d-flex justify-content-center align-items-center">
                <AiOutlineSend size={20} />
              </Botao>
              <Botao color="danger" type="reset" className="d-flex justify-content-center align-items-center">
                <AiOutlineClear size={20} />
              </Botao>
            </InputGroup>
          </Form>
        )}
      </Formik>
    </>
  );
}