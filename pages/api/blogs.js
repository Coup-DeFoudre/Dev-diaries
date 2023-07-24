// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//http://localhost:3000/api/blogs

import * as fs from "fs";

export default async function handler(req, res) {
  let files = fs.readdirSync("blogdata");
  let data = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let content = fs.readFileSync(`blogdata/${file}`, "utf8");
    data.push(JSON.parse(content));
  }
  res.status(200).json(data);
}
