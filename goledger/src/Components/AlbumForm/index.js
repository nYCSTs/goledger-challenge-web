import { useEffect, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { getAssetDataList } from '../../Services/artistServices';
import { Multi, Select, InputDiv } from './Style';
import { Input, P } from '../../Constants/usefulStyles';

const AlbumForm = ({
  name, setName, genre, setGenre, nTracks, setNTracks, artist, setArtist,
  explicit, setExplicit, year, setYear, selectedStreamingServices,
  setSelectedStreamingServices, disableInputs = false,
}) => {
  const [artistList, setArtistList] = useState();
  const [streamingList, setStreamingList] = useState();

  useEffect(async () => {
    await getAssetDataList('artist')
      .then((r) => setArtistList(r.data.result));
  }, []);

  useEffect(async () => {
    await getAssetDataList('streaming')
      .then((r) => setStreamingList(r.data.result));
  }, []);

  return (
    <>
      <Multi>
        <InputDiv>
          <P>Name:</P>
          <Input disabled={disableInputs} value={name || ''} onChange={(e) => setName(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <P>Genre:</P>
          <Input value={genre || ''} onChange={(e) => setGenre(e.target.value)} />
        </InputDiv>
      </Multi>
      <Multi>
        <InputDiv>
          <P>Artist:</P>
          <Multiselect
            options={artistList}
            selectedValues={[artist]}
            displayValue="name"
            singleSelect
            onSearch={(e) => console.log(e)}
            onSelect={(_, i) => setArtist(i)}
            style={{
              optionContainer: {
                color: 'black',
              },
            }}
          />
        </InputDiv>
        <InputDiv style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <P>Year:</P>
            <Select disabled={disableInputs} value={year} onChange={(e) => setYear(e.target.value)}>
              {Array(Math.ceil((2022 - 1900) / 1)).fill(1900).map((x, y) => x + y * 1)
                .map((yr, idx) => (
                  <option value={yr} key={idx}>
                    {yr}
                  </option>
                ))}
            </Select>
          </div>
          <div>
            <P>Tracks:</P>
            <Select value={nTracks} onChange={(e) => setNTracks(e.target.value)}>
              {[...Array(31).keys()].slice(1).map((stroke, idx) => (
                <option key={idx}>
                  {stroke}
                </option>
              ))}
            </Select>
          </div>
        </InputDiv>
      </Multi>
      <Multi>
        <div style={{ width: '60%' }}>
          <P>Streaming:</P>
          <Multiselect
            options={streamingList}
            selectedValues={selectedStreamingServices}
            onSelect={(_, s) => setSelectedStreamingServices([...selectedStreamingServices, s])}
            onRemove={(s) => setSelectedStreamingServices(s)}
            displayValue="name"
          />
        </div>
        <div>
          <P>Explicit:</P>
          {explicit ? (
            <Select
              defaultValue={explicit}
              onChange={(e) => setExplicit(e.target.value)}
            >
              <option value="Safe">Safe</option>
              <option value="Explicit">Explicit</option>
            </Select>
          ) : null}
        </div>
      </Multi>
    </>
  );
};

export default AlbumForm;
