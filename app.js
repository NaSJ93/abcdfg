const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/nsj',(req,res,next)=>{
  console.log('test')
  console.log('checkout 테스트')

  ///////쓸데없는 단어 추가
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});