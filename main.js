import express from "express";
const app = express();
const port = 3000;

// middleware for form data
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.post('/entry' , (req, res) => {
  const {username ,email , password} = req.body
try {
  if (username == "admin" && password == "1234") {
    res.send(`Login Done`)
  } else {
      res.status(401).send("Invalid username or password");
    }
} catch (error) {
  console.log(`rohit`, error)
  
}
})


app.get('/' , (req, res)=> {
  res.send("hello world")
})

app.listen(port, () => console.log(`Server running ons port ${port}`));
