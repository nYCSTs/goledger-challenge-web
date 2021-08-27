import ReactFlagsSelect from 'react-flags-select';
import {
  InputDiv, P, Input,
} from '../AssetForm/Style';

const ArtistForm = ({
  name, setName, description, setDescription, country, setCountry,
}) => (
  <div>
    <InputDiv>
      <P>Nome:</P>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
    </InputDiv>
    <InputDiv>
      <P>Descrição:</P>
      <Input value={description} onChange={(e) => setDescription(e.target.value)} />
    </InputDiv>
    <InputDiv>
      <P>Pais:</P>
      <ReactFlagsSelect
        selected={country}
        onSelect={(cc) => setCountry(cc)}
        placeholder=" "
        searchable
        searchPlaceholder="Buscar país"
        fullWidth={false}
      />
    </InputDiv>
  </div>
);
export default ArtistForm;
