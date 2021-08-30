import { Grid, Row } from 'react-flexbox-grid';
import { useHistory } from 'react-router';
import Loading from '../Loading';
import {
  Button, H2, Title, DesktopFilter, MobileFilter, List,
} from './Style';
import { Input } from '../../Constants/usefulStyles';

const ListComponent = ({
  type, list, registPath, filter, setFilter,
}) => {
  const history = useHistory();

  return (
    <List>
      <Title>
        <H2>{`${type}s`}</H2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DesktopFilter>
            <p>Filter:</p>
            <Input style={{ marginRight: '26px' }} value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} />
          </DesktopFilter>
          <Button onClick={() => history.push(registPath)}>
            New
            <br />
            {type}
          </Button>
        </div>
      </Title>
      <MobileFilter>
        <p>Filter:</p>
        <Input value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} />
      </MobileFilter>
      <Grid fluid>
        <Row>
          {list || <Loading />}
        </Row>
      </Grid>
    </List>
  );
};
export default ListComponent;
