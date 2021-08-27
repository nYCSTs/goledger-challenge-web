import { useEffect, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import RegisterAsset from '../../Components/AssetForm';
import { registerAlbum, getAssetDataList } from '../../Services/artistServices';
import {
  InputDiv, P, Input,
} from '../../Components/AssetForm/Style';
import { MultiInput, Select } from './Style';

const RegisterAlbum = () => {
  const [genre, setGenre] = useState();
  const [artist, setArtist] = useState();
  const [year, setYear] = useState('2021');
  const [nTracks, setNTracks] = useState(1);
  const [explicit, setExplicit] = useState('0');
  const [albumName, setAlbumName] = useState();
  const [selectedStreamingServices, setSelectedStreamingServices] = useState([]);

  const [artistList, setArtistList] = useState();
  const [streamingList, setStreamingList] = useState();

  const submitRegister = async () => {
    if (albumName && genre) {
      const response = await registerAlbum(
        albumName,
        genre,
        year,
        artist,
        nTracks,
        explicit === '1',
        selectedStreamingServices,
      ).then((r) => (r));
      if (response.status === 200) {
        alert('Album was registered with success!');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  useEffect(async () => {
    await getAssetDataList('artist')
      .then((r) => setArtistList(r.data.result));
  }, []);

  useEffect(async () => {
    await getAssetDataList('streaming')
      .then((r) => setStreamingList(r.data.result));
  }, []);

  useEffect(() => {
    if (artistList) {
      setArtist(artistList[0]);
    }
  }, [artistList]);

  return (
    <>
      <RegisterAsset
        asset="Album"
        submitFunction={submitRegister}
      >
        <InputDiv>
          <P>Name:</P>
          <Input onChange={(e) => setAlbumName(e.target.value)} width="100" />
        </InputDiv>
        <MultiInput>
          <div style={{ width: '50%' }}>
            <P>Genre:</P>
            <Input onChange={(e) => setGenre(e.target.value)} width="100" />
          </div>
          <div style={{ width: '15%' }}>
            <P>Tracks:</P>
            <Select value={nTracks} onChange={(e) => setNTracks(e.target.value)}>
              {[...Array(31).keys()].slice(1).map((stroke, idx) => (
                <option key={idx}>
                  {stroke}
                </option>
              ))}
            </Select>
          </div>
        </MultiInput>
        <MultiInput>
          <div style={{ width: '50%' }}>
            <P>Artist:</P>
            <Select
              onChange={(e) => setArtist(artistList.filter((r) => r.name === e.target.value))}
            >
              {artistList?.map((r, idx) => (
                <option key={idx}>
                  {r.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <div>
              <P>Explicit:</P>
              <Select onChange={(e) => setExplicit(e.target.value)}>
                <option value={0}>Safe</option>
                <option value={1}>Explicit</option>
              </Select>
            </div>
            <div>
              <P>Year:</P>
              <Select onChange={(e) => setYear(e.target.value)}>
                {Array(Math.ceil((2022 - 1900) / 1)).fill(1900).map((x, y) => x + y * 1)
                  .map((yr, idx) => (
                    <option value={yr} key={idx}>
                      {yr}
                    </option>
                  ))}
              </Select>
            </div>
          </div>
        </MultiInput>
        <P>Streaming:</P>
        <Multiselect
          options={streamingList}
          onSelect={(_, i) => {
            selectedStreamingServices.push({
              '@assetType': 'streaming',
              '@key': i['@key'],
            });
          }}
          onRemove={(_, i) => {
            setSelectedStreamingServices(
              selectedStreamingServices.filter((e) => e['@key'] !== i['@key']),
            );
          }}
          displayValue="name"
        />
      </RegisterAsset>
    </>
  );
};

export default RegisterAlbum;
