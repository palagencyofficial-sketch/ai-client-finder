const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

async function scrapeFunding(){

const url="https://techcrunch.com/category/startups/"

const {data}=await axios.get(url)

const $=cheerio.load(data)

let leads=[]

$("article").each((i,el)=>{

const title=$(el).find("h2").text().trim()

if(!title) return

const lead={

company:title.split(" ")[0] + " Startup",

need:"Product Launch Video",

budget:"$5000+",

contact:"founder@" + title.split(" ")[0].toLowerCase() + ".com"

}

leads.push(lead)

})

fs.writeFileSync("leads.json",JSON.stringify(leads,null,2))

console.log("Funding leads generated")

}

scrapeFunding()
