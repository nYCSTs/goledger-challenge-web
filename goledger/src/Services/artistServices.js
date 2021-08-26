import { APIArtist } from './baseService/baseService';

export const getAssetData = async (assetType) => {
  try {
    const response = await APIArtist.post('/query/search', {
      query: {
        selector: {
          '@assetType': assetType,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const registerArtist = async (artistName, artistDescription, artistCountry) => {
  try {
    const response = await APIArtist.post('/invoke/createAsset', {
      asset: [
        {
          '@assetType': 'artist',
          name: artistName,
          location: artistCountry,
          description: artistDescription,
        },
      ],
    });
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteAsset = async (assetID) => {
  try {
    const response = await APIArtist.delete('/invoke/deleteAsset/', {
      'key': assetID,
    });
    return response;
  } catch (err) {
    return err;
  }
};
