import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ArtistForm from '../../Components/ArtistForm';
import RegisterAsset from '../../Components/AssetForm';
import countryCodes from '../../Constants/countryCodes';
import { getAssetData, updateArtist } from '../../Services/artistServices';

const EditArtistPage = () => {
  const { id } = useParams();
  const [artistName, setArtistName] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [artistDescription, setArtistDescription] = useState();

  const updateArtistData = async () => {
    await updateArtist(
      artistName,
      countryCodes.filter((r) => r.code === selectedCountry)[0].name,
      artistDescription,
    ).then((r) => (r));
  };

  useEffect(async () => {
    await getAssetData('artist', id)
      .then((r) => {
        setArtistName(r.data.result[0].name);
        setArtistDescription(r.data.result[0].description);
        setSelectedCountry(countryCodes.find((cc) => cc.name === r.data.result[0].location).code);
      });
  }, []);

  return (
    <RegisterAsset asset="Artist" submitFunction={updateArtistData} title="Edit">
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

export default EditArtistPage;
