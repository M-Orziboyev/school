import express from "express";
import cors  from "cors";
// import Auth from "./routes/auth.js";

const app = express();

app.use(cors());
// app.use(Auth)
app.use(express.json());


app.post('/login', (req, res) => {
    res.redirect('/');
    console.log(req.body)
});

app.get('/', (req, res) => {
    res.render('../client/src/App')
});



app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});