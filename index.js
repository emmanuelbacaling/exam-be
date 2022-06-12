const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const auth = require("./jsonfile/authenticate.json")
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post("/login", (req, res) => {
  const { username, password } = req.body
  auth.map((e) => {
    if (e.username === username && e.password === password) {
      res.send({ message: "Success", isValidated: true })
    } else {
      res.send({
        message: "User's doesn't exist, sample user is ( test , test )",
        isValidated: false,
      })
    }
  })
})

app.listen(8000, () => {
  console.log("this is running ni port 8000")
})
