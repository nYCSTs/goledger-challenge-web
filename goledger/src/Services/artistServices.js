import APIGeneral from './baseService/baseService';

// Assets Data List
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

// Specific Asset
export const getAssetData = async (assetID) => {
  try {
    const response = await APIGeneral.post('/query/search', {
      query: {
        selector: {
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

// Search Asset
export const searchAsset = async (assetType, searchParams) => {
  try {
    const response = await APIGeneral.post('/query/search', {
      query: {
        selector: {
          '@assetType': assetType,
          ...searchParams,
        },
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const registerAsset = async (assetType, assetValues) => {
  try {
    const response = await APIGeneral.post('/invoke/createAsset', {
      asset: [
        {
          '@assetType': assetType,
          ...assetValues,
        },
      ],
    });
    return response;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export const updateAsset = async (assetType, assetValues) => {
  try {
    const response = await APIGeneral.put('/invoke/updateAsset', {
      update: {
        '@assetType': assetType,
        ...assetValues,
      },
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
