const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/nsj',(req,res,next)=>{
  console.log('test')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});