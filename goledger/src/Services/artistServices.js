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
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const registerAlbum = async (name, genre, year, artist, nTracks, explicit, strOptions) => {
  try {
    const response = await APIArtist.post('/invoke/createAsset', {
      asset: [
        {
          '@assetType': 'album',
          name,
          year,
          nTracks,
          artist: {
            '@assetType': 'artist',
            '@key': artist['@key'],
          },
          genre,
          explicit,
          strOptions,
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

export const registerStreaming = async (name) => {
  try {
    const response = await APIArtist.post('/invoke/createAsset', {
      'asset': [
        {
          '@assetType': 'streaming',
          'name': name,
        },
      ],
    });
    if (response.status === 200) {
      alert('Streaming service registered with success.');
    }
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};
