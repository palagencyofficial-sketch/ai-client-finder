console.log("AI Lead Finder Started")

function generateLead(){

const companies=[
"FinTech Startup",
"AI SaaS Company",
"Web3 Platform",
"Ecommerce Brand",
"Marketing Agency"
]

const services=[
"Video Ads",
"Explainer Video",
"Product Demo",
"UGC Ads",
"Automation Setup"
]

let company=companies[Math.floor(Math.random()*companies.length)]

let need=services[Math.floor(Math.random()*services.length)]

let budget="$"+(1000+Math.floor(Math.random()*5000))

let email="contact@"+company.replace(/\s/g,'').toLowerCase()+".com"

let lead={company,need,budget,contact:email}

console.log("New AI Lead:",lead)

}

generateLead()
