import { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { useHistory } from 'react-router';
import { BsFillTrashFill } from 'react-icons/bs';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdModeEdit, MdExplicit } from 'react-icons/md';
import ModalComponent from '../ModalComponent';
import {
  Data, Information, AlbumTitle, Top,
} from './Style';
import { Tools } from '../ArtistData/Style';

const AlbumData = ({ data, refreshFunction, artistPage }) => {
  const history = useHistory();
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Col md={4} sm={6}>
        <Data>
          <Top>
            <AlbumTitle>{`${data?.name} (${data?.year})`}</AlbumTitle>
            {!artistPage ? (
              <Tools>
                <MdModeEdit
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const key = data['@key'];
                    history.push(`/album/edit/${key.substring(key.indexOf(':') + 1)}`);
                  }}
                />
                <BsFillTrashFill style={{ cursor: 'pointer' }} onClick={() => setModalState(true)} />
              </Tools>
            ) : null}
          </Top>
          <Information>{`Tracks: ${data?.nTracks}`}</Information>
          <Information>{`Year: ${data?.year}`}</Information>
          <Information>{`Genre: ${data?.genre}`}</Information>
          <Information>
            Explicit:
            {data.explicit ? <MdExplicit /> : <IoCheckmarkCircleSharp />}
          </Information>
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
