const express = require("express")
const nodeMailer = require('nodemailer')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(function(req, res, next) {
    // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'application/json');

    next();
});
app.get("/notice", (req, res) => {
    res.send("please try post method")
})
app.post("/notice", (req, res) => {
    let data = req.body;
    res.send("hello")
    console.log(req.body);


    const transporter = nodeMailer.createTransport({
        service: "Gmail",
        auth: {
            user: "socials@supersaga.app",
            pass: "jeiemiiaviyiaajg"
        }
    })
    const options = {
        from: "socials@supersaga.app",
        to: data.email,
        subject: "Thank you for joining",
        html: `
        Your quote has been submitted successfully, the team will
        get in touch with you within 24 hours.
        
        `
    }
    const options1 = {
        from: "socials@supersaga.app",
        to: "pradeep@highavenue.co",
        subject: "User report",
        html: `
        
        New user: ${data.name} 
        <br></br>
        Mail: ${data.email}
        <br></br> 
        Phone number: ${data.phone}
        <br></br> 

        `
    }


    transporter.sendMail(options, (err, res) => {
        if (err) {
            // console.log(err);
            return;
        }
        // console.log(fun);
    })
    transporter.sendMail(options1)


    transporter.close()
})





app.listen(port, () => {
    console.log(`listening to port ${port}`);
})