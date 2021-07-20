import fs from "fs-extra";

(async () => {
  try {
    const exists = await fs.stat("./db.json");
    if (exists) return;
  } catch (error) {
    await fs.writeJson("db.json", { messages: [], chistes: [] });
  }
})();
