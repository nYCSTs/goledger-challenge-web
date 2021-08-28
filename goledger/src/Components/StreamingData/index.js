import { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import ModalComponent from '../ModalComponent';
import {
  Tools, Name, Data,
} from './Style';

const StreamingData = ({ data, refreshFunction }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <Col md={3} sm={4}>
        <Data>
          <Name>{data.name}</Name>
          <Tools>
            <MdModeEdit style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => console.log('placeholder')} />
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
