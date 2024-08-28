// to run the back end on a server

// 1. import json server
const jsonServer = require('json-server')


// 2. create a server(for backend) for media app using json server

const MediaApp = jsonServer.create()
// creates an instance of the json server
// returns an express server


// 3. create a middleware(for smooth data passing b/w front nd back end)

const middleware = jsonServer.defaults()  
// jsonserver.defaults() - returns default middlewares used by json server


// 4. set up routes for db.json (it must be run on a port)

const route = jsonServer.router('db.json')
// returns a json server router
// router serves data from a json file , here db.json
// The router automatically generates routes based on the content of the db.json file. 



// 5. set up port for running server (by default we hv port 3000, but it is not always available)
// to make the port always available

const PORT = 3000 || process.env.PORT
// to set up a port number on which a server will listen for incoming requests.
// process.env.PORT - when it is hosted, port may be diff. this ensures that the app works on that port as well

MediaApp.use(middleware)
MediaApp.use(route)
// to use the middleware and route


// run the server
MediaApp.listen(PORT,()=>{
    console.log("Media App server running on port ",PORT)
})

// MediaApp is the instance of the server created using jsonServer.create().
// The listen method is a function that starts the server and binds it to a specific port.
// a callback function that runs once the server starts successfully.


// NOTE : sometyms the index.js wont run on a version of json-server 
// node index.js  - to run

// 1. uninstall json-server
        // npm uninstall json-server
// 2. install a stable version
        // npm i json-server@0.17.4



// "scripts": {
//     "start": "node index.js"
//   },
// to run - npm start
