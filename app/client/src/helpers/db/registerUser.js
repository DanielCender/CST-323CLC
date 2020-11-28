export const registerUser = ({ firstName, lastName, email, password } = {}) => {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password }),
  };
  return new Promise((res, rej) =>
    fetch('/api/user/create', requestOptions)
      .then((response) => response.json())
      .then((data) => res(data))
      .catch((e) => rej(e))
  );
};
