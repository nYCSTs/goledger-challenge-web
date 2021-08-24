import { useEffect, useState } from 'react';
import { getAssetList } from '../../Services/artistServices';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import {
    Page, Slider, SliderFlowControls, Information, ArtistInformation,
    AlbunsInformation,
} from './Style';

const HomePage = () => {
    const [assetList, setAssetList] = useState([]);

    const getAssetListFromAPI = async(assetType) => {
        await getAssetList(assetType).then((r) => console.log(r));
    }

    useEffect(() => {
        getAssetListFromAPI('artist');
        getAssetListFromAPI('album');
    }, []);

    return (
        <Page>
            <Slider>
                <Information>
                    <ArtistInformation>
                        <h2></h2>
                        <p></p>
                    </ArtistInformation>
                    <AlbunsInformation>

                    </AlbunsInformation>
                </Information>
                <SliderFlowControls>
                    <button><AiOutlineLeft /></button>
                    <button><AiOutlineRight /></button>
                </SliderFlowControls>
            </Slider>
        </Page>
    );
};

export default HomePage;