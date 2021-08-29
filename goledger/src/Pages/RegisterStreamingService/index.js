import { useState } from 'react';
import { useHistory } from 'react-router';
import RegisterAsset from '../../Components/AssetForm';
import { registerStreaming } from '../../Services/artistServices';
import { P, Input } from '../../Constants/usefulStyles';

const RegisterStreamingService = () => {
  const history = useHistory();
  const [serviceName, setServiceName] = useState();

  const submitRegister = async () => {
    const response = await registerStreaming(serviceName)
      .then((ss) => ss);
    if (response.status === 200) {
      alert('Streaming service was registered with success!');
    } else if (response.status === 409) {
      alert('This streaming service has already been registered.');
    }
    history.push('/streaming/');
  };
  return (
    <RegisterAsset
      title="Register"
      asset="Streaming"
      submitFunction={submitRegister}
    >
      <div>
        <P>Streaming service name:</P>
        <Input onChange={(e) => setServiceName(e.target.value)} />
      </div>
    </RegisterAsset>
  );
};

export default RegisterStreamingService;
