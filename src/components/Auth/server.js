
const express = require('express');
const mysql = require('mysql');

const cors = require('cors');

const app = express();

var username_s= "";
// const cors = require('cors');
app.use(express.json());
app.use(cors());


const con = mysql.createConnection(
  {
    user:"root",
    host:"localhost",
    password:"",
    database: "users"
  }
)


app.post('/register', (req, res)=> {
  console.log("in server now of patient");
  // con.query("INSERT INTO users (email,password) VALUES ('scsdf', '1212')");
  console.log("out of server");

  
  const email = req.body.email;
  const password = req.body.password;
  const confirm = req.body.confirm;

  if(password===confirm){
    console.log("password and confirm same");

    
  console.log(email);
  console.log(password);

  con.query("INSERT INTO users (email,password) VALUES (?, ?)", [email, password],

    (err , result) => {
      if(result){
        res.send(result)

      }
      else{
        res.send({message: "Enter correct asked details"})
      }
    }
  )
  }
  else{
    console.log("nahi same")
    res.send({message: "Password and confirm password not match!!!"})
  }
  
  
})



app.post('/d_register', (req, res)=> {
  console.log("in server now");
  // con.query("INSERT INTO users (email,password) VALUES ('scsdf', '1212')");
  console.log("out of server");

  
  const email = req.body.email;
  const specialization = req.body.specialization;
  const name = req.body.name;
  const contact = req.body.contact;
  const gender = req.body.gender;
  const password = req.body.password;
  const confirm =  req.body.confirm;

  console.log(email);
  console.log(password);

  if(password===confirm){


  con.query("INSERT INTO doctors (email, name, contact, specialization, gender, password) VALUES (?,?,?,?,?,?);", [email,name,contact, specialization,gender,password],

    (err , result) => {
      if(result){


        res.send(result)


      }
      else{
        res.send({message: "Enter correct asked details"})
      }
    }
  )
  
  }
  else{
    res.send({message: "Password and confirm password not same!!!!"})
  }
})

app.post('/login', (req, res) => {
  console.log("in server nowww");

  const email = req.body.email;
  const password = req.body.password;
  username_s = email;
  console.log("your email is "+ username_s)

  con.query("SELECT * FROM users WHERE email = ? and password = ?", [email, password],
    (err, result) => {
      if (err) {
        console.log("ghalat hi ");
        res.status(500).send({ error: err }); // Sending an error response
      } else {
        if (result.length > 0) {
          // console.log(result.body.email)
          // username_s = result.body.email;
          // console.log(username_s);
          res.send(result);
          
        } else {
          console.log("username pass ghalat")
          res.send({ message: "WRONG USERNAME AND PASSWORD" });
        }
      }
    }
  );
});


app.post('/register_add', (req, res)=> {
  console.log("In 3 wala server");
  // con.query("INSERT INTO users (email,password) VALUES ('scsdf', '1212')");
  console.log("out of server");

  
  const or_email = req.body.email;
  const address = req.body.address;
  const dob = req.body.dob;

  con.query("UPDATE users SET or_email= ?, address = ?, dob = ? WHERE email = ?", [or_email,address,dob,username_s],

    (err , result) => {
      if(result){
        console.log("ho gya ha add ok");
        res.send(result)

      }
      else{
        console.log("nai ghalat ha again try");
        res.send({message: "Enter correct asked details"})
      }
    }
  )
  
  
})


app.post('/d_login', (req, res) => {
  console.log("in server now");

  const email = req.body.email;
  const password = req.body.password;
  console.log(email);

  con.query("SELECT * FROM doctors WHERE email = ? and password = ?", [email, password],
    (err, result) => {
      if (err) {
        console.log("ghalat hi ");
        res.status(500).send({ error: err }); // Sending an error response
      } else {
        if (result.length > 0) {
            console.log("sahi ho gya");
            res.send(result);
        } else {
          console.log("username pass ghalat");
          res.send({ message: "WRONG USERNAME AND PASSWORD" });
        }
      }
    }
  );
});

app.post('/fetch_patient_details', (req, res) => {
  console.log("in server now");
  console.log(username_s+"from second g")

  con.query("SELECT * FROM users where email = ?",[username_s],
    (err, result) => {
      if (err) {
        console.log("ghalat hi ");
        res.status(500).send({ error: err }); // Sending an error response
      } else {
        if (result.length > 0) {
            console.log("sahi ho gya");
            res.send(result);
        } else {
          console.log("no data found");
        }
      }
    }
  );
});

app.post('/ChangePass', (req, res) => {
  console.log("in server now in change pass");
  console.log(username_s+"is the username");
  const new_pass = req.body.passNew;

  con.query("UPDATE users SET password = ? WHERE email = ?",[new_pass, username_s],
    (err, result) => {
      if (err) {
        console.log("ghalat hi ");
        res.status(500).send({ error: err }); // Sending an error response
      } else {
        if (result.length > 0) {
            console.log("sahi ho gya");
            res.send(result);
        } else {
          console.log("no data found");
        }
      }
    }
  );
});








app.listen(3001, () => {
  console.log("running backend server ok")
})




