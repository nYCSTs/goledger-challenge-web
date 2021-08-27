import { APIArtist } from './baseService/baseService';

export const getAssetDataList = async (assetType) => {
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

export const getAssetData = async (assetType, assetID) => {
  try {
    const response = await APIArtist.post('/query/search', {
      'query': {
        'selector': {
          '@assetType': assetType,
          '@key': `${assetType}:${assetID}`,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getArtistAlbuns = async (artistID) => {
  try {
    const response = await APIArtist.post('/query/search', {
      'query': {
        'selector': {
          '@assetType': 'album',
          'artist': {
            '@key': `artist:${artistID}`,
          },
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
      'data': {
        'key': {
          '@key': assetID,
        },
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
