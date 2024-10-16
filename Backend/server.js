const express = require('express');
const cors = require('cors');
const app = express();

// Permette di gestire richieste da domini diversi 
// (necessario per la comunicazione con il frontend)
app.use(cors()); 
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 