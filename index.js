const express =  require('express');
const path = require('path');
const port =  process.env.PORT || 3000;
const app = express() ;

const destinationDir =path.join(__dirname,'./dist');
console.log(`server sai`);
app.use(express.static(destinationDir));
console.log(`express hosting from ${destinationDir}`);


app.get('*',(req,res)=>{
res.sendfile(path.join(destinationDir,'index.html'))

});

console.log(`server index.html`);


app.listen(port,() => console.log(`server is running from port ${port}`));
