import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import RegisterAsset from '../../Components/RegisterComponent';
import countryCodes from '../../Constants/countryCodes';
import { registerArtist } from '../../Services/artistServices';
import {
  InputDiv, P, Input,
} from '../../Components/RegisterComponent/Style';

const Register = () => {
  const [artistName, setArtistName] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  const submitRegister = () => {
    registerArtist(
      artistName,
      artistDescription,
      countryCodes.filter((r) => r.code === selectedCountry)[0].name,
    );
  };

  return (
    <RegisterAsset asset="Artista" submitFunction={submitRegister}>
      <div>
        <InputDiv>
          <P>Nome:</P>
          <Input onChange={(e) => setArtistName(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <P>Descrição:</P>
          <Input onChange={(e) => setArtistDescription(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <P>Pais:</P>
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={(cc) => setSelectedCountry(cc)}
            placeholder=" "
            searchable
            searchPlaceholder="Buscar país"
            fullWidth={false}
          />
        </InputDiv>
      </div>
    </RegisterAsset>
  );
};

export default Register;
