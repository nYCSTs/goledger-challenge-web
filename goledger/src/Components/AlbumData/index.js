import { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import ModalComponent from '../ModalComponent';
import {
  Data, Information, AlbumTitle, Top,
} from './Style';
import { Tools } from '../ArtistData/Style';

const AlbumData = ({ data, refreshFunction }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Col md={3} sm={6}>
        <Data>
          <Top>
            <AlbumTitle>{`${data.name} (${data.year})`}</AlbumTitle>
            <Tools>
              <MdModeEdit style={{ cursor: 'pointer' }} onClick={() => console.log('placeholder')} />
              <BsFillTrashFill style={{ cursor: 'pointer' }} onClick={() => setModalState(true)} />
            </Tools>
          </Top>
          <Information>{`Tracks: ${data.nTracks}`}</Information>
          <Information>{`Genre: ${data.genre}`}</Information>
          <Information>{`Rating: ${data.explicit ? '' : 'explicit'}`}</Information>
        </Data>
      </Col>
      <ModalComponent
        type="album"
        data={data}
        setModalState={setModalState}
        modalState={modalState}
        refreshFunction={refreshFunction}
      />
    </>
  );
};

export default AlbumData;
