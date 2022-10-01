import express from 'express';

const app = express();
const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);

})