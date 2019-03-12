//sessão DADOS
fetch('https://of900lijd5.execute-api.us-east-1.amazonaws.com/v2/front-end/grid-people', {
  method: 'GET',
}).then(results => {
  if (results.ok) {
    return results.json();
  } else {
    throw new Error(`Could not reach the API: ${ results.statusText } `);
  }
}).then(data => {
  console.log(data);
}).catch(error => {
  console.error(error.message);
});