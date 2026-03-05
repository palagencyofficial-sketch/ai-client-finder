const nodemailer = require("nodemailer")

async function sendEmail(){

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:"yourgmail@gmail.com",
pass:"yourapppassword"
}

})

const mailOptions={

from:"yourgmail@gmail.com",

to:"client@email.com",

subject:"Quick Idea for Your Brand",

text:`Hi,

I noticed your company recently and thought it has great potential.

I help brands create high converting video ads that increase engagement and sales.

Would love to share a quick concept for your business.

Best,
Khokon
Pal Editing Agency`

}

await transporter.sendMail(mailOptions)

console.log("Email Sent")

}

sendEmail()
