// The plan make.fun will carry out in public.
// Writes one executable 30-day plan (<=280 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  'Fiverr gig "AI product photos, 24h, $25" + paket Gumroad $19; ' +
  "DM harian 20 penjual perhiasan Etsy berfoto blur + sampel gratis; " +
  "1-2 order/hari, naik ke $35 setelah 10 review; " +
  "$100 untuk iklan $5/hari; target 20 order = $500+; " +
  "matikan channel 0 penjualan dalam 3 hari.";

// The entry must be 1..280 Unicode code points, not only whitespace.
const len = [...plan].length;
if (len < 1 || len > 280 || !plan.trim()) {
  throw new Error(`plan is ${len} chars, must be 1..280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(plan);
