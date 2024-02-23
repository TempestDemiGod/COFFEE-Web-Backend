import app from "./utils/app.js";
import { connectDb } from "./utils/db.js";

const port = 3000
connectDb()


app.listen(port, ()=> console.log(`listening to port ${port}`) )
