import Stat from "../models/Stat.js";

export default async function trackVisit(page) {
  try {
    await Stat.findOneAndUpdate(
      { page },
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error("Visit tracking failed");
  }
}
