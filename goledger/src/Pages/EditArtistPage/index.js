import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import AssetForm from '../../Components/AssetForm';
import ArtistForm from '../../Components/ArtistForm';
import countryCodes from '../../Constants/countryCodes';
import { getAssetData, updateArtist } from '../../Services/artistServices';

const EditArtistPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [artistName, setArtistName] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [artistDescription, setArtistDescription] = useState();

  const updateArtistData = async () => {
    const response = await updateArtist(
      artistName,
      countryCodes.filter((r) => r.code === selectedCountry)[0].name,
      artistDescription,
    ).then((r) => (r));
    if (response.status === 200) {
      alert('The artist was successfully updated!');
      history.push('/artists/');
    }
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
    <AssetForm asset="Artist" submitFunction={updateArtistData} title="Edit">
      <ArtistForm
        name={artistName}
        setName={setArtistName}
        description={artistDescription}
        setDescription={setArtistDescription}
        country={selectedCountry}
        setCountry={setSelectedCountry}
        disableInputs
      />
    </AssetForm>

  );
};

export default EditArtistPage;
