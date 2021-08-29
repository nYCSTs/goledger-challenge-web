import Loading from '../Loading';
import {
  H1, Form, ChildDiv, Button,
} from './Style';

const AssetForm = ({
  asset, title, children, submitFunction, slide,
}) => (
  <>
    {slide ? <Loading /> : (
      <Form>
        <H1>
          {title}
          {' '}
          {asset}
        </H1>
        <ChildDiv>
          {children}
        </ChildDiv>
        <Button onClick={() => submitFunction()}>{title}</Button>
      </Form>
    )}
  </>
);

export default AssetForm;
