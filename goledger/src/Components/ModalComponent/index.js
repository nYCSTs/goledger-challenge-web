import Modal from 'react-modal';
import { deleteAsset } from '../../Services/artistServices';
import {
  P, Button, ButtonsDiv,
} from './Style';

const ModalComponent = ({
  type, data, modalState, setModalState, refreshFunction,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '250px',
      transform: 'translate(-50%, -50%)',
    },
  };

  const deleteAssetFromApi = async () => {
    const response = await deleteAsset(data['@key'])
      .then((r) => (r));
    if (response.status === 200) {
      alert(`${type} successfully deleted`);
    }
    refreshFunction();
    setModalState(false);
  };

  return (
    <Modal
      isOpen={modalState}
      style={customStyles}
    >
      <div>
        <P>
          {`Are you sure that you want to remove the ${type} `}
          <strong>{data?.name}</strong>
          ?
        </P>
        <ButtonsDiv>
          <Button onClick={() => setModalState(false)}>Cancel</Button>
          <Button onClick={async () => deleteAssetFromApi()}>Delete</Button>
        </ButtonsDiv>
      </div>
    </Modal>
  );
};

export default ModalComponent;
