import { useState } from 'react';
import RegisterAsset from '../../Components/AssetForm';
import { registerStreaming } from '../../Services/artistServices';
import {
  InputDiv, P, Input,
} from '../../Components/AssetForm/Style';

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
      <InputDiv>
        <P>Streaming service name:</P>
        <Input onChange={(e) => setServiceName(e.target.value)} />
      </InputDiv>
    </RegisterAsset>
  );
};

export default RegisterStreamingService;
