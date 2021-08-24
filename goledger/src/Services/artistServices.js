import { APIArtist } from './baseService/baseService';

export const getAssetList = async(assetType) => {
    try {
        const response = await APIArtist.post('/query/search', {
            "query": {
                "selector": {
                    "@assetType": assetType,
                },
            },
        });
        return response;
    } catch (err) {
        console.error(err);
        return err;
    };
};