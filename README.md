# CLIENT SIDE 

1. Clone the repository
  $ git clone https://github.com/velozmontero/devices-clientapp.git 

2. Install the dependencies
  $ npm install

3. Initialize the client server
  $ npm start 
 
4. On your browser go to http://localhost:3001

# SERVER SIDE

1. Make sure the server allows Cross-Origin comunication with your client server. Please add the following middleware to middlewares.js if it does not exist.

        app.use(function (req, res, next) {
          res.header('Access-Control-Allow-Credentials', true);
          res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
          res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
          next();
        });