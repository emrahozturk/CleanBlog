const express = require('express');
const path=require('path'); //DEFINE PATH FOR TEMP
const app = express();

//MIDDLEWARE
app.use(express.static('public'))

app.get('/', (req, res) => {
//   const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

  res.sendFile(path.resolve(__dirname,'temp/index.html')); //SEND IN TEMP FILE 
});

const port = 3000;

app.listen(port, () => {
  console.log(`SERVER AT ${port} STARTED`);
});
