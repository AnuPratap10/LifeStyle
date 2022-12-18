let express = require("express");
let cors = require("cors");
const { connection } = require("./Config/db");
const { ProductRouter } = require("./Routes/products.routes")
const { CartRouter } = require("./Routes/cart.routes")

let app = express();
app.use(cors());
app.use(express.json());


app.use("/products", ProductRouter)
app.use("/cart", CartRouter)


app.get("/", async(req, res)=>{
    res.send({msg:"Welcome to Lyfe Style"})
})



console.log(new Date(new Date().getTime()) )


app.listen(process.env.PORT, async()=>{
    try{
        await connection;
        console.log("Connection to DB successful!");
        console.log(`listening to port ${process.env.PORT} at http://localhost:${process.env.PORT}`);
    }
    catch(err){
        console.log(err);
        console.log("Connection to DB failed");
    }
})