import {
  H1, Form, ChildDiv, Button,
} from './Style';

const RegisterAsset = ({ asset, children, submitFunction }) => (
  <Form>
    <H1>
      Cadastrar
      {' '}
      {asset}
    </H1>
    <ChildDiv>
      {children}
    </ChildDiv>
    <Button onClick={() => submitFunction()}>Registrar</Button>
  </Form>
);

export default RegisterAsset;
