import { APIArtist } from './baseService/baseService';

export const getArtistsList = async () => {
  try {
    const response = await APIArtist.post('/query/search', {
      query: {
        selector: {
          '@assetType': 'artist',
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
