const Urls = {
  GET: 'https://30.javascript.pages.academy/kekstagram/data',
  POST: 'https://30.javascript.pages.academy/kekstagram/',
};

const sendRequest = (onSuccess, onFail, method, body) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: body,
    },
  )
    .then((responce) => responce.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onFail(err);
    });
};

const getData = (onSuccess, onFail, method = 'GET') => sendRequest(onSuccess, onFail, method);
const sendData = (onSuccess, onFail, method = 'POST', body) => sendRequest(onSuccess, onFail, method, body);

export {getData, sendData };
