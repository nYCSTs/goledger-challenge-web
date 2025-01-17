import { useState, useEffect } from 'react';
import { Col } from 'react-flexbox-grid';
import { useHistory } from 'react-router';
import { BsFillTrashFill } from 'react-icons/bs';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdModeEdit, MdExplicit } from 'react-icons/md';
import ModalComponent from '../ModalComponent';
import {
  Data, Information, AlbumTitle, Top, StreamService,
} from './Style';
import { Tools } from '../ArtistData/Style';
import { getAssetData } from '../../Services/artistServices';
import Loading from '../Loading';

const AlbumData = ({
  data, refreshFunction, artistPage, showStreamingInfo,
}) => {
  const history = useHistory();
  const [slider, setSlider] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [streamingKeyList, setStreamingKeyList] = useState([]);
  const [streamingList, setStreamingList] = useState();

  const renderStreamingList = () => {
    if (showStreamingInfo) {
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {slider ? <Loading /> : streamingList?.map((so) => (
            <StreamService>{so.data.result[0].name}</StreamService>
          ))}
        </div>
      );
    }
    return null;
  };

  // streaming platforms
  useEffect(() => {
    if (showStreamingInfo) {
      setStreamingKeyList(data.strOptions?.map((r) => r['@key']));
    }
  }, []);

  useEffect(async () => {
    if (streamingKeyList?.length) {
      const promises = streamingKeyList?.map((r) => getAssetData(r));
      Promise.all(promises)
        .then((r) => setStreamingList(r));
      setSlider(false);
    }
  }, [streamingKeyList]);

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
          <div>
            <Information>{`Tracks: ${data?.nTracks}`}</Information>
            <Information>{`Year: ${data?.year}`}</Information>
            <Information>{`Genre: ${data?.genre}`}</Information>
            <Information>
              Explicit:
              {data.explicit ? (
                <>
                  <MdExplicit style={{ marginLeft: '2px' }} />
                  <p style={{ margin: '0 0 0 2px' }}>(+18)</p>
                </>
              ) : (
                <>
                  <IoCheckmarkCircleSharp style={{ marginLeft: '2px' }} />
                  <p style={{ margin: '0 0 0 2px' }}>(Safe)</p>
                </>
              )}
            </Information>
          </div>
          {renderStreamingList()}
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
