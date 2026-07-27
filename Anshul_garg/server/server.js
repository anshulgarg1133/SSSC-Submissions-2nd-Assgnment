import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import router from "./router/route.js";

const app=express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const PORT = process.env.PORT || 8080;

app.use('/api',router)

app.get('/', (req,res)=>{
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
});