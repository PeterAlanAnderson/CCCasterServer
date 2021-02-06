import React from 'react';

export const sendAuth = (userName, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName: userName, password: password }),
  };
  console.log('sending', userName, password);
  console.log(fetch);
  fetch('http://localhost:3030/loginuser', requestOptions).then((res) => {
    console.log(res);
    return res;
  });
};
