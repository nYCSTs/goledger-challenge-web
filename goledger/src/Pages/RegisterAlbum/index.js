import { useState } from 'react';
import { useHistory } from 'react-router';
import AlbumForm from '../../Components/AlbumForm';
import AssetForm from '../../Components/AssetForm';
import { registerAsset } from '../../Services/artistServices';

const RegisterAlbum = () => {
  const history = useHistory();
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState([]);
  const [year, setYear] = useState('2021');
  const [nTracks, setNTracks] = useState(1);
  const [explicit, setExplicit] = useState('0');
  const [albumName, setAlbumName] = useState('');
  const [selectedStreamingServices, setSelectedStreamingServices] = useState([]);

  const submitRegister = async () => {
    if (albumName && genre) {
      const response = await registerAsset('album', {
        name: albumName,
        year,
        nTracks,
        artist: {
          '@assetType': 'artist',
          '@key': artist['@key'],
        },
        genre,
        explicit: explicit === '1',
        strOptions: selectedStreamingServices.map((so) => ({ '@assetType': 'streaming', '@key': so['@key'] })),
      });
      if (response.status === 200) {
        alert('Album was registered with success!');
      } else if (response.status === 409) {
        alert('This album has already been registered.');
      }
      history.push('/albuns/');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <AssetForm title="Register" asset="Album" submitFunction={submitRegister}>
      <AlbumForm
        name={albumName}
        setName={setAlbumName}
        artist={artist}
        setArtist={setArtist}
        genre={genre}
        setGenre={setGenre}
        year={year}
        setYear={setYear}
        nTracks={nTracks}
        setNTracks={setNTracks}
        explicit={explicit}
        setExplicit={setExplicit}
        selectedStreamingServices={selectedStreamingServices}
        setSelectedStreamingServices={setSelectedStreamingServices}
      />
    </AssetForm>
  );
};

export default RegisterAlbum;
