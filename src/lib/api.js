

const userData = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/connect`, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    const responseToJSON = await response.json();
    return responseToJSON;
  } catch (e) {
    return null;
    console.log(e, 'error');
  }
};

export default userData;
