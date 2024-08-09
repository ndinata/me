import puppeteer from "puppeteer";

const RESUME_URL = "http://localhost:4321/resume";
const PDF_PATH = "public/nico-dinata-resume.pdf";
const PDF_PAGE_SIZE = "A4";

(async () => {
  console.log("Opening a new browser page...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log(`Navigating to '${RESUME_URL}'...`);
  await page.goto(RESUME_URL, { waitUntil: "networkidle2" });

  console.log(`Saving page as PDF (size ${PDF_PAGE_SIZE}) to '${PDF_PATH}'...`);
  await page.pdf({ path: PDF_PATH, format: PDF_PAGE_SIZE });

  console.log("Done!");
  await browser.close();
})();
