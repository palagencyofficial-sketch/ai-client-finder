const fs = require("fs")

let leads = []

const companies = [
"FinTech Startup",
"SaaS Analytics",
"AI Automation Agency",
"Ecommerce Brand",
"Web3 Platform"
]

const services = [
"Video Ads",
"Product Demo Video",
"Explainer Animation",
"UGC Ads",
"Marketing Automation"
]

function generateLead(){

const company = companies[Math.floor(Math.random()*companies.length)]
const need = services[Math.floor(Math.random()*services.length)]

const budget = "$" + (1000 + Math.floor(Math.random()*5000))

const email = "contact@" + company.replace(/\s/g,'').toLowerCase() + ".com"

const lead = {
company,
need,
budget,
contact:email
}

leads.push(lead)

}

for(let i=0;i<10;i++){
generateLead()
}

fs.writeFileSync("leads.json", JSON.stringify(leads,null,2))

console.log("Leads Generated")
