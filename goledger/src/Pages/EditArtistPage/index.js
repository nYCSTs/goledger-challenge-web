import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import AssetForm from '../../Components/AssetForm';
import ArtistForm from '../../Components/ArtistForm';
import countryCodes from '../../Constants/countryCodes';
import { getAssetData, updateAsset } from '../../Services/artistServices';

const EditArtistPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [artistName, setArtistName] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [slide, setSlide] = useState(false);

  const updateArtistData = async () => {
    if (artistDescription !== '') {
      setSlide(true);
      const response = await updateAsset('artist', {
        name: artistName,
        location: countryCodes.filter((r) => r.code === selectedCountry)[0].name,
        description: artistDescription,
      }).then((r) => r);
      if (response.status === 200) {
        alert('The artist was successfully updated!');
      }
      history.push('/artists/');
    } else {
      alert('Please fill in all fields.');
    }
  };

  useEffect(async () => {
    await getAssetData('artist:'.concat(id))
      .then((r) => {
        setArtistName(r.data.result[0].name);
        setArtistDescription(r.data.result[0].description);
        setSelectedCountry(countryCodes.find((cc) => cc.name === r.data.result[0].location).code);
      });
  }, []);

  return (
    <AssetForm asset="Artist" submitFunction={updateArtistData} title="Edit" slide={slide}>
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
