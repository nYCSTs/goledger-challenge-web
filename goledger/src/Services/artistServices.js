import APIGeneral from './baseService/baseService';

export const getAssetDataList = async (assetType) => {
  try {
    const response = await APIGeneral.post('/query/search', {
      query: {
        selector: {
          '@assetType': assetType,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const getAssetData = async (assetType, assetID) => {
  try {
    const response = await APIGeneral.post('/query/search', {
      query: {
        selector: {
          '@assetType': assetType,
          '@key': `${assetType}:${assetID}`,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const getAssetData2 = async (ID) => {
  try {
    const response = await APIGeneral.post('/query/search', {
      query: {
        selector: {
          '@key': `${ID}`,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const getArtistAlbuns = async (artistID) => {
  try {
    const response = await APIGeneral.post('/query/search', {
      query: {
        selector: {
          '@assetType': 'album',
          artist: {
            '@key': `artist:${artistID}`,
          },
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const registerArtist = async (artistName, artistDescription, artistCountry) => {
  try {
    const response = await APIGeneral.post('/invoke/createAsset', {
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
    return err.response;
  }
};

export const registerAlbum = async (name, genre, year, artist, nTracks, explicit, strOptions) => {
  try {
    const response = await APIGeneral.post('/invoke/createAsset', {
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
          strOptions: strOptions.map((so) => ({ '@assetType': 'streaming', '@key': so['@key'] })),
        },
      ],
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const deleteAsset = async (assetID) => {
  try {
    const response = await APIGeneral.delete('/invoke/deleteAsset/', {
      data: {
        key: {
          '@key': assetID,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const registerStreaming = async (name) => {
  try {
    const response = await APIGeneral.post('/invoke/createAsset', {
      asset: [
        {
          '@assetType': 'streaming',
          name,
        },
      ],
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const updateArtist = async (name, location, description) => {
  try {
    const response = await APIGeneral.put('/invoke/updateAsset', {
      update: {
        '@assetType': 'artist',
        name,
        location,
        description,
      },
    });
    if (response.status === 200) {
      alert('Updated!');
    }
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const updateAsset = async (header) => {
  try {
    const response = await APIGeneral.put('/invoke/updateAsset', header);
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const updateAsset2 = async (assetType, id, val) => {
  const json = { update: { '@assetType': assetType, '@key': assetType.concat(':', id), ...val } };
  try {
    const response = await APIGeneral.put('/invoke/updateAsset', json);
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const updateAlbum = async (name, year, nTracks, artist, genre, explicit, strOptions) => {
  try {
    const response = await APIGeneral.put('/invoke/updateAsset', {
      update: {
        '@assetType': 'album',
        name,
        year,
        nTracks,
        artist,
        genre,
        explicit,
        strOptions,
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};
