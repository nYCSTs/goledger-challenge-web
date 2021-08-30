import { useState } from 'react';
import { useHistory } from 'react-router';
import RegisterAsset from '../../Components/AssetForm';
import { registerAsset } from '../../Services/artistServices';
import { P, Input } from '../../Constants/usefulStyles';

const RegisterStreamingService = () => {
  const history = useHistory();
  const [serviceName, setServiceName] = useState();
  const [slide, setSlide] = useState(false);

  const submitRegister = async () => {
    if (serviceName) {
      setSlide(true);
      const response = await registerAsset('streaming', { name: serviceName })
        .then((ss) => ss);
      if (response.status === 200) {
        alert('The streaming platform was successfully registered!');
      } else if (response.status === 409) {
        alert('This streaming service has already been registered.');
      }
      history.push('/streaming/');
    } else {
      alert('Please fill in all fields.');
    }
  };
  return (
    <RegisterAsset
      title="Register"
      asset="Streaming"
      submitFunction={submitRegister}
      slide={slide}
    >
      <div>
        <P>Streaming service name:</P>
        <Input placeholder="streaming service name" onChange={(e) => setServiceName(e.target.value)} />
      </div>
    </RegisterAsset>
  );
};

export default RegisterStreamingService;
