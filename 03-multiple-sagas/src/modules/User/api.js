export const getUserInfo = (apiKey, user) => {
  return fetch(
    `https://api.github.com/users/${user}?access_token=${apiKey}`
  ).then(response => {
    const { status, statusText } = response;

    if (status !== 200) {
      throw statusText;
    }

    return response.json();
  });
};
