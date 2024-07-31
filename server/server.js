const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(express.json()); // express đọc hiểu data từ client gửi lên
app.use(express.urlencoded({ extended: true })); // đọc hiểu dữ liệu dạng urlencoded

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

