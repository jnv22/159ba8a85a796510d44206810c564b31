

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/connect`, {
      method: 'POST',
      credentials: 'include',
    });
    const responseToJSON = await response.json();
    return responseToJSON;
  } catch (e) {
    return false;
  }
};

export const fetchTweets = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/tweets`, {
      credentials: 'include',
    });
    const responseToJSON = await response.json();
    return responseToJSON;
  } catch (e) {
    return false;
  }
};

export const logOut = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/disconnect`, {
      method: 'POST',
      credentials: 'include',
    });
    const responseToJSON = await response.json();
    return responseToJSON;
  } catch (e) {
    return false;
  }
};
