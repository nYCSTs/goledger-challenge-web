import { useState } from "react";
import RegisterAsset from "../../Components/RegisterAsset";
import ReactFlagsSelect from "react-flags-select";
import {
    InputDiv, P, Input,
} from '../../Components/RegisterAsset/Style';

const Register = () => {
    const [artistName, setArtistName] = useState();
    const [artistDescription, setArtistDescription] = useState();
    const [selectedCountry, setSelectedCountry] = useState();

    return (
        <RegisterAsset 
            asset="Artista"
            children={
                <>
                    <InputDiv>
                        <P>Nome:</P>
                        <Input onChange={(e) => setArtistName(e.target.value)}/>
                    </InputDiv>
                    <InputDiv>
                        <P>Descrição:</P>
                        <Input onChange={(e) => setArtistDescription(e.target.value)} />
                    </InputDiv>
                    <InputDiv>
                        <P>Pais:</P>
                        <ReactFlagsSelect 
                            selected={selectedCountry}
                            onSelect={(c) => setSelectedCountry(c)}
                            placeholder=" "
                            searchable
                            searchPlaceholder="Buscar país"
                            fullWidth={false}
                        />
                    </InputDiv>
                </>
            }
        />
    );
}

export default Register;