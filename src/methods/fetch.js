// Function to send fetch requests to the server
const fetcher = (url, method, body) => fetch(
url,
{
  method: method || 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : undefined
})
.then(response => response.json())
.catch(err => {
  console.error(err);
})

export default fetcher;