import ReactFlagsSelect from 'react-flags-select';
import {
  P, Input,
} from '../../Constants/usefulStyles';
import TextArea from './Style';

const ArtistForm = ({
  name, setName, description, setDescription, country, setCountry, disableInputs = false,
}) => (
  <>
    <div>
      <P>Nome:</P>
      <Input disabled={disableInputs} value={name || ''} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <P>Descrição:</P>
      <TextArea
        rows={10}
        spellcheck
        value={description || ''}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <div>
      <P>Pais:</P>
      <ReactFlagsSelect
        disabled={disableInputs}
        selected={country}
        onSelect={(cc) => setCountry(cc)}
        placeholder=" "
        searchable
        searchPlaceholder="Buscar país"
        fullWidth={false}
      />
    </div>
  </>
);
export default ArtistForm;
