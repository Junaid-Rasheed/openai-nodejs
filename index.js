import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const openai = new Configuration({
  apiKey: process.env.API_KEY,
});

const apiAi = new OpenAIApi(openai);

const UserInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

UserInterface.prompt();

UserInterface.on("line", async (input) => {
  const res = await apiAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  console.log(res.data.choices[0].message.content);
  UserInterface.prompt();
});

// apiAi
//   .createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "you are good" }],
//   })
//   .then((res) => {
//     console.log(res.data.choices[0].message.content);
//   });
