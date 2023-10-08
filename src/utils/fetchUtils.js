const createFetchRequest = async (url, method, body = null, headers = null) => {
  const requestOptions = { method, headers: headers ? headers : {}, body };

  try {
    const response = await fetch(url, requestOptions);
    return response;
  } catch (error) {
    // Handle the error here, you can log it or perform other actions
    console.error("An error occurred during the fetch operation:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export const fetchGet = async (url, headers = null) => {
  return await createFetchRequest(url, "GET", null, headers);
};

export const fetchPost = async (url, body, headers = null) => {
  return await createFetchRequest(url, "POST", body, headers);
};

export const fetchUpdate = async (url, body, headers = null) => {
  return await createFetchRequest(url, "PUT", body, headers);
};

export const fetchDelete = async (url, headers = null) => {
  return await createFetchRequest(url, "DELETE", null, headers);
};
