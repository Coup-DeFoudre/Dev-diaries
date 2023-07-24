//http://localhost:3000/api/getblog?slug=how-to-learn-flask

import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    if(err) res.status(404).json({message: "Not Found"}
    );
    res.status(200).json(JSON.parse(data));
  }
    );
}
