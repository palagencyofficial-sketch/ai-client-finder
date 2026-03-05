const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

async function scrapeUpwork(){

const url = "https://www.upwork.com/freelance-jobs/video-editing/"

const {data} = await axios.get(url)

const $ = cheerio.load(data)

let leads=[]

$(".job-tile").each((i,el)=>{

const title=$(el).find(".job-title").text().trim()

const budget=$(el).find(".budget").text().trim()

const lead={
company:"Upwork Client",
need:title,
budget:budget || "$1000+",
contact:"upwork-client@lead.com"
}

leads.push(lead)

})

fs.writeFileSync("leads.json",JSON.stringify(leads,null,2))

console.log("Upwork leads updated")

}

scrapeUpwork()
