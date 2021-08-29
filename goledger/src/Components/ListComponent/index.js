import { Grid, Row } from 'react-flexbox-grid';
import { useHistory } from 'react-router';
import {
  Button, H2, Title,
} from './Style';

const ListComponent = ({ type, list, registPath }) => {
  const history = useHistory();
  return (
    <>
      <Title>
        <H2>{`${type}s`}</H2>
        <Button onClick={() => history.push(registPath)}>
          Register
          {' '}
          {type}
        </Button>
      </Title>
      <Grid>
        <Row>
          {list}
        </Row>
      </Grid>
    </>
  );
};
export default ListComponent;
