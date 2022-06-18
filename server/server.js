const express = require('express');
const app = express();

//routes
app.get('/api/', (req, res) => {
	res.json({ msg: 'hello world!' });
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});
