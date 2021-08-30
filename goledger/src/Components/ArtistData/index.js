import { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { useHistory } from 'react-router';
import { MdModeEdit } from 'react-icons/md';
import { BsArrowUpShort, BsArrowDownShort, BsFillTrashFill } from 'react-icons/bs';
import ModalComponent from '../ModalComponent';
import {
  Field, Title, P, Button, Tools, Top, A, ArtistInfo,
} from './Style';

const ArtistData = ({
  type, data, description = 'No description available for this artist :(', refreshFunction,
}) => {
  const key = data['@key'].substring(data['@key'].indexOf(':') + 1);
  const history = useHistory();
  const [showText, setShowText] = useState('hide');
  const [modalState, setModalState] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <>
      <Col xd={12} md={12} sm={12} xs={12}>
        <Field>
          <Top>
            <Title>
              <ArtistInfo>
                {`${data.name} (${data.location})` }
              </ArtistInfo>
              <A href={'/artist/'.concat(key)}>Artist Page</A>
            </Title>
            <Tools>
              <MdModeEdit
                style={{ cursor: 'pointer' }}
                onClick={() => history.push(`/artist/edit/${key}`)}
              />
              <BsFillTrashFill
                style={{ cursor: 'pointer' }}
                onClick={() => setModalState(true)}
              />
            </Tools>
          </Top>
          <div>
            <P>
              {showDescription ? description : null}
            </P>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '5px 0' }}>
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
          </div>
        </Field>
      </Col>
      <ModalComponent
        type="artist"
        setModalState={setModalState}
        modalState={modalState}
        data={data}
        refreshFunction={refreshFunction}
      />
    </>
  );
};

export default ArtistData;
