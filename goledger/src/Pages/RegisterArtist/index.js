import { useState } from 'react';
import RegisterAsset from '../../Components/AssetForm';
import ArtistForm from '../../Components/ArtistForm';
import countryCodes from '../../Constants/countryCodes';
import { registerArtist } from '../../Services/artistServices';

const RegisterArtist = () => {
  const [artistName, setArtistName] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  const submitRegister = async () => {
    await registerArtist(
      artistName,
      artistDescription,
      countryCodes.filter((r) => r.code === selectedCountry)[0].name,
    );
  };

  return (
    <RegisterAsset asset="Artist" submitFunction={submitRegister} title="Register">
      <ArtistForm
        name={artistName}
        setName={setArtistName}
        description={artistDescription}
        setDescription={setArtistDescription}
        country={selectedCountry}
        setCountry={setSelectedCountry}
      />
    </RegisterAsset>
  );
};

export default RegisterArtist;
