import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import allRoutes from "./routes/index.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', allRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})