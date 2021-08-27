import { useState } from 'react';
import { useHistory } from 'react-router';
import { Col } from 'react-flexbox-grid';
import { BsArrowUpShort, BsArrowDownShort, BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import ModalComponent from '../ModalComponent';
import {
  Field, Title, P, Button, Description, Tools, Top,
} from './Style';

const ArtistData = ({
  type, data, description = 'No description for this artist :(',
}) => {
  const history = useHistory();
  const [showText, setShowText] = useState('hide');
  const [modalState, setModalState] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <>
      <Col xs={12} md={12} sm={12}>
        <Field>
          <Top>
            <Title>
              {data.name}
              {' '}
              {`(${data.location})`}
            </Title>
            <Tools>
              <MdModeEdit
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  const key = data['@key'];
                  history.push(`/artist/edit/${key.substring(key.indexOf(':') + 1)}`);
                }}
              />
              <BsFillTrashFill
                style={{ cursor: 'pointer' }}
                onClick={() => setModalState(true)}
              />
            </Tools>
          </Top>
          <Description>
            <P>
              {showDescription ? description : null}
            </P>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={() => {
                setShowDescription(!showDescription);
                if (showDescription) {
                  setShowText('show');
                } else {
                  setShowText('hide');
                }
              }}
              >
                {showDescription ? <BsArrowUpShort /> : <BsArrowDownShort />}
                {`${showText} ${type} description`}
              </Button>
            </div>
          </Description>
        </Field>
      </Col>
      <ModalComponent
        type="artist"
        setModalState={setModalState}
        modalState={modalState}
        data={data}
      />
    </>
  );
};

export default ArtistData;
