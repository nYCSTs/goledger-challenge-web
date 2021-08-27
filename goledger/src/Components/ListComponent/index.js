import { Grid, Row } from 'react-flexbox-grid';
import {
  Page, Button, Listing, H2, A, Title,
} from './Style';

const ListComponent = ({ type, list, registPath }) => (
  <Page>
    <Title>
      <H2>{`${type}s`}</H2>
      <A href={registPath}>
        <Button>
          Register
          <br />
          {type}
        </Button>
      </A>
    </Title>
    <Listing>
      <Grid fluid>
        <Row>
          {list}
        </Row>
      </Grid>
    </Listing>
  </Page>
);

export default ListComponent;