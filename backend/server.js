import app from "./app.js";
import cors from "cors";
const app = express();
// Enable CORS for all routes
app.use(cors());
app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
