import { useState } from 'react';
import { useHistory } from 'react-router';
import RegisterAsset from '../../Components/AssetForm';
import ArtistForm from '../../Components/ArtistForm';
import countryCodes from '../../Constants/countryCodes';
import { registerAsset } from '../../Services/artistServices';

const RegisterArtist = () => {
  const history = useHistory();
  const [artistName, setArtistName] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [slide, setSlide] = useState(false);

  const submitRegister = async () => {
    if (artistName && artistDescription && selectedCountry) {
      setSlide(true);
      const response = await registerAsset('artist', {
        name: artistName,
        description: artistDescription,
        location: countryCodes.filter((r) => r.code === selectedCountry)[0].name,
      }).then((r) => r);
      if (response.status === 200) {
        alert('The artist was successfully registered!');
      } else if (response.status === 409) {
        alert('This artist has already been registered.');
      }
      history.push('/artists');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <RegisterAsset asset="Artist" submitFunction={submitRegister} title="Register" slide={slide}>
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
