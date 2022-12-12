const PORT = process.env.PORT || 3000;
const express = require("express")
const cities = require("./cities.json");

const app = express();

app.get("/", (req, res) => {
	res.send(cities)
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}/`);
});