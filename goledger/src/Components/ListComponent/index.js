import { Grid, Row } from 'react-flexbox-grid';
import { useHistory } from 'react-router';
import Loading from '../Loading';
import {
  Button, H2, Title,
} from './Style';
import { Input } from '../../Constants/usefulStyles';

const ListComponent = ({
  type, list, registPath, filter, setFilter,
}) => {
  const history = useHistory();

  return (
    <>
      <Title>
        <H2>{`${type}s`}</H2>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex', height: '100%', alignItems: 'center', marginRight: '6px',
          }}
          >
            <p>Filter:</p>
            <Input value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} />
          </div>
          <Button style={{ width: '50%' }} onClick={() => history.push(registPath)}>
            Register
            <br />
            {type}
          </Button>
        </div>
      </Title>
      <Grid>
        <Row>
          {list || <Loading />}
        </Row>
      </Grid>
    </>
  );
};
export default ListComponent;
