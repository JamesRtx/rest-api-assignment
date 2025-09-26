const express = require('express');
const RestApi  = require('./Api/Restapi.controller.js');
const app = express();
const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// **************************************************************
// Put your implementation here
// If necessary to add imports, please do so in the section above

app.get('/users/:id', RestApi.RetrieveaUser);
app.post('/users', RestApi.CreateaUser);
app.put('/users/:id', RestApi.UpdateaUser);
app.delete('/users/:id', RestApi.DeleteaUser);
// Do not touch the code below this comment
// **************************************************************

// Start the server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app; // Export the app for testing