import { useState } from 'react';
import RegisterAsset from '../../Components/AssetForm';
import ArtistForm from '../../Components/ArtistForm';
import countryCodes from '../../Constants/countryCodes';
import { registerArtist } from '../../Services/artistServices';
import { useHistory } from 'react-router';

const RegisterArtist = () => {
  const history = useHistory();
  const [artistName, setArtistName] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  const submitRegister = async () => {
    const response = await registerArtist(
      artistName,
      artistDescription,
      countryCodes.filter((r) => r.code === selectedCountry)[0].name,
    );
    if (reseponse.status === 200) {
      alert("Artist was successfully registered!");
      history.push('/artists');
    }
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
