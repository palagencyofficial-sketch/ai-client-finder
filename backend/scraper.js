/**
 * ============================================================================
 * AI Client Finder - Advanced Lead Generation Engine
 * Designed & Developed by: Khokan Pal
 * ============================================================================
 */

const fs = require("fs");
const path = require("path");

// Terminal UI Colors (ANSI Escape Codes) for a premium console experience
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    red: "\x1b[31m"
};

// --- Configuration ---
const TOTAL_LEADS_TO_GENERATE = 5;
const OUTPUT_FILE = path.join(__dirname, "leads.json");

// --- Data Pools for Randomization ---
const companies = [
    "AI SaaS Startup",
    "FinTech Platform",
    "Ecommerce Brand",
    "Crypto Exchange",
    "Marketing Agency",
    "HealthTech Innovators",
    "Web3 Gaming Corp",
    "Real Estate Automations"
];

const services = [
    "Short-form Video Ads",
    "Explainer Video",
    "Product Demo",
    "UGC Ad Campaigns",
    "AI Automation Setup",
    "Sales Copywriting",
    "Lead Generation Funnel"
];

const emailPrefixes = ["contact", "hello", "ceo", "marketing", "founders", "info"];

// --- Core Functions ---

/**
 * Formats a number as a standard US currency string (e.g., $2,500)
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
}

/**
 * Generates a single high-quality lead object
 */
function generateLead() {
    // Random selections
    const company = companies[Math.floor(Math.random() * companies.length)];
    const need = services[Math.floor(Math.random() * services.length)];
    const prefix = emailPrefixes[Math.floor(Math.random() * emailPrefixes.length)];
    
    // Generate a realistic budget (rounded to nearest 100, between $1500 and $5500)
    const rawBudget = Math.floor(Math.random() * 41) * 100 + 1500;
    const budget = formatCurrency(rawBudget);
    
    // Generate a clean, realistic email address
    const cleanDomain = company.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const email = `${prefix}@${cleanDomain}.com`;

    return {
        company: company,
        requirement: need,
        budget: budget,
        contact: email,
        status: "New Lead",
        generatedAt: new Date().toISOString()
    };
}

// --- Main Execution Engine ---

function runEngine() {
    console.clear();
    console.log(`${colors.cyan}${colors.bright}====================================================${colors.reset}`);
    console.log(`${colors.bright}🚀 AI Client Finder Engine Initiated...${colors.reset}`);
    console.log(`${colors.cyan}====================================================\n${colors.reset}`);
    
    console.log(`${colors.yellow}>> Mining data & generating high-ticket leads...${colors.reset}\n`);

    let leads = [];

    // Generate leads
    for (let i = 0; i < TOTAL_LEADS_TO_GENERATE; i++) {
        leads.push(generateLead());
    }

    // Display the generated leads beautifully in the terminal
    console.table(leads.map(lead => ({
        Company: lead.company,
        Need: lead.requirement,
        Budget: lead.budget,
        Email: lead.contact
    })));

    console.log(`\n${colors.yellow}>> Exporting data to secure JSON database...${colors.reset}`);

    // Save to JSON with error handling
    try {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(leads, null, 4));
        console.log(`${colors.green}${colors.bright}✔ Success! ${TOTAL_LEADS_TO_GENERATE} leads successfully saved to ${OUTPUT_FILE}${colors.reset}`);
        console.log(`\n${colors.magenta}Engine developed by Khokan Pal${colors.reset}\n`);
    } catch (error) {
        console.error(`${colors.red}${colors.bright}✖ Error saving leads: ${error.message}${colors.reset}`);
    }
}

// Start the engine
runEngine();
