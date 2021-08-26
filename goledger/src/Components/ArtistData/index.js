import { useState } from 'react';
import { BsArrowUpShort, BsArrowDownShort, BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import {
  Field, Title, P, Button, Description, Tools, Top,
} from './Style';

const DataList = ({
  type, name, description = 'No description for this artist :(', country, editFunction, deleteFunction,
}) => {
  const [showDescription, setShowDescription] = useState(true);
  const [showText, setShowText] = useState('hide');

  return (
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
  );
};

export default DataList;
