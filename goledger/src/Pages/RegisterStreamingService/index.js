import { useState } from 'react';
import RegisterAsset from '../../Components/AssetForm';
import { registerStreaming } from '../../Services/artistServices';
import { P, Input } from '../../Constants/usefulStyles';

const RegisterStreamingService = () => {
  const [serviceName, setServiceName] = useState();

  const submitRegister = async () => {
    await registerStreaming(serviceName);
  };
  return (
    <RegisterAsset
      asset="Stream service"
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
