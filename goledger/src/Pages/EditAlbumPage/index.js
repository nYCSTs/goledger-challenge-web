import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import AlbumForm from '../../Components/AlbumForm';
import AssetForm from '../../Components/AssetForm';
import {
  getAssetData, updateAsset,
} from '../../Services/artistServices';

const EditAlbumPage = () => {
  let artistID;
  const history = useHistory();
  const { id } = useParams();
  const [genre, setGenre] = useState();
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('2021');
  const [nTracks, setNTracks] = useState(1);
  const [explicit, setExplicit] = useState('0');
  const [name, setName] = useState();
  const [streamingServices, setStreamingServices] = useState([]);
  const [streamingServicesOG, setStreamingServicesOG] = useState([]);

  const updateAlbumData = async () => {
    const response = await updateAsset('album', {
      name,
      year,
      nTracks,
      artist: { '@assetType': 'artist', '@key': artist['@key'] },
      genre,
      explicit: !!(explicit === '1' || explicit === 'Explicit'),
      strOptions: streamingServicesOG.map((ss) => ({ '@assetType': 'streaming', '@key': ss['@key'] })),
    }).then((r) => r);
    if (response.status === 200) {
      alert('The album was successfully updated!');
      history.push('/albuns/');
    }
  };

  useEffect(async () => {
    await getAssetData('album:'.concat(id))
      .then((r) => {
        setName(r.data.result[0].name);
        setYear(r.data.result[0].year);
        setGenre(r.data.result[0].genre);
        setNTracks(r.data.result[0].nTracks);
        setExplicit(r.data.result[0].explicit ? 'Explicit' : 'Safe');
        artistID = r.data.result[0].artist['@key'];
        setStreamingServices(r.data.result[0].strOptions);
      });
    getAssetData(artistID).then((r) => setArtist(r.data.result[0]));
  }, []);

  useEffect(async () => {
    const promises = streamingServices.map(async (ss) => new Promise((resolve) => {
      setTimeout(() => resolve(getAssetData(ss['@key'])), 1000);
    }));
    setStreamingServicesOG(await (await Promise.all(promises)).map(
      (x) => x.data.result[0],
    ));
  }, [streamingServices]);

  return (
    <AssetForm title="Edit" asset="Album" submitFunction={updateAlbumData}>
      <AlbumForm
        name={name}
        setName={setName}
        genre={genre}
        setGenre={setGenre}
        nTracks={nTracks}
        setNTracks={setNTracks}
        artist={artist}
        setArtist={setArtist}
        explicit={explicit}
        setExplicit={setExplicit}
        year={year}
        setYear={setYear}
        selectedStreamingServices={streamingServicesOG}
        setSelectedStreamingServices={setStreamingServicesOG}
        disableInputs
      />
    </AssetForm>
  );
};

export default EditAlbumPage;
