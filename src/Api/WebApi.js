const WebApi = function (url) {

  let ApiUrl = `http://localhost:3001/${url}`;

  function get() {
    return fetch(ApiUrl, {
      accept: "application/json"
    })
      .then(checkResponse)
  }

  function checkResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }

  return {
    get
  }
}

export default WebApi;