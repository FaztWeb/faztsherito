import tmi from "tmi.js";
import { readFile, writeFile } from "./libs/json";
import { options } from "./options";

let dbJSON = [];

const client = tmi.Client(options);

client.on("connected", async () => {
  dbJSON = await readFile();
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;
  dbJSON.messages.push({
    username: tags.username,
    message: message,
  });
  writeFile(dbJSON);

  if (!message.startsWith("!")) return;
  const args = message.slice(1).split(" ");
  const command = args.shift();

  if (command === "add") {
    const n1 = parseInt(args[0]);
    const n2 = parseInt(args[1]);
    client.say(channel, `${tags.username} tu suma es: ${n1 + n2}`);
  }

  if (command === "chiste") {
    dbJSON.chistes.push({
      username: tags.username,
      chiste: args.join(" "),
    });
    client.say(
      channel,
      `Gracias ${tags.username} por añadir tu frase!!! not8Ewe`
    );
  }
});

export { client };
