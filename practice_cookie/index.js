const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine','ejs')

app.use(cookieParser('123awq1o2i3hha821@13912@#!@$'));

const cookieConfig = {
    httpOnly : true,
    maxAge : 60 * 1000, // 1분.
    signed : true,
}

app.get('/', (req,res) => {
    res.cookie('myCookie','myValue',cookieConfig)
    res.render('index');
});
app.get('/getCookie', (req,res) => {
    res.send('/getCookie');
})
app.listen(PORT, () => {
    console.log(`htt[://localhost:${PORT}`)
});
