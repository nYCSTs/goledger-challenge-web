import { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { useHistory } from 'react-router';
import ModalComponent from '../ModalComponent';
import {
  Tools, Name, Data,
} from './Style';

const StreamingData = ({ data, refreshFunction }) => {
  const history = useHistory();
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Col md={3} sm={4}>
        <Data>
          <Name>{data.name}</Name>
          <Tools>
            <MdModeEdit
              style={{ fontSize: '18px', cursor: 'pointer' }}
              onClick={() => {
                const key = data['@key'];
                history.push(`/streaming/edit/${key.substring(key.indexOf(':') + 1)}`);
              }}
            />
            <BsFillTrashFill style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => setModalState(true)} />
          </Tools>
        </Data>
      </Col>
      <ModalComponent
        type="streaming"
        setModalState={setModalState}
        modalState={modalState}
        data={data}
        refreshFunction={refreshFunction}
      />
    </>
  );
};

export default StreamingData;
