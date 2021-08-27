import { Col } from 'react-flexbox-grid';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import {
  Tools, Name, Data,
} from './Style';

const StreamingData = ({ streamingName }) => (
  <Col md={3} sm={4}>
    <Data>
      <Name>{streamingName}</Name>
      <Tools>
        <MdModeEdit style={{ fontSize: '18px' }} />
        <BsFillTrashFill style={{ fontSize: '18px' }} />
      </Tools>
    </Data>
  </Col>
);

export default StreamingData;
