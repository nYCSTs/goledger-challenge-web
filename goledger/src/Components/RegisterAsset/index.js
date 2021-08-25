import {
    H1, Form, ChildDiv, Button,
} from './Style';

const RegisterAsset = ({ asset, children }) => {
    return (
        <Form>
            <H1>Cadastrar {asset}</H1>
            <ChildDiv>
                {children}
            </ChildDiv>
            <Button>Registrar</Button>
        </Form>
    );
} 

export default RegisterAsset;