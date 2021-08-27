import { Col } from 'react-flexbox-grid';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import {
  Data, Information, AlbumTitle, Top,
} from './Style';
import { Tools } from '../ArtistData/Style';

const AlbumData = ({
  name, year, genre, explicit, nTracks, editFunction, deleteFunction,
}) => (
  <Col md={3} sm={6}>
    <Data>
      <Top>
        <AlbumTitle>{`${name} (${year})`}</AlbumTitle>
        <Tools>
          <MdModeEdit style={{ cursor: 'pointer' }} onClick={() => editFunction()} />
          <BsFillTrashFill style={{ cursor: 'pointer' }} onClick={() => deleteFunction()} />
        </Tools>
      </Top>
      <Information>{`Tracks: ${nTracks}`}</Information>
      <Information>{`Genre: ${genre}`}</Information>
      <Information>{`Rating: ${explicit ? '' : 'explicit'}`}</Information>
    </Data>
  </Col>
);

export default AlbumData;
