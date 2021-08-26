import { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { BsArrowUpShort, BsArrowDownShort, BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import {
  Field, Title, P, Button, Description, Tools, Top,
} from './Style';

const ArtistData = ({
  type, name, description = 'No description for this artist :(', country, editFunction, deleteFunction,
}) => {
  const [showDescription, setShowDescription] = useState(true);
  const [showText, setShowText] = useState('hide');

  return (
    <Col xs={12} md={12} sm={12}>
      <Field>
        <Top>
          <Title>
            {name}
            {' '}
            {`(${country})`}
          </Title>
          <Tools>
            <MdModeEdit style={{ cursor: 'pointer' }} onClick={() => editFunction()} />
            <BsFillTrashFill style={{ cursor: 'pointer' }} onClick={() => deleteFunction()} />
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
  );
};

export default ArtistData;
