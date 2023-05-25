import * as fs from 'node:fs';


export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      console.log(req.body)
      let data = await fs.promises.readdir('contactdata');
      console.log(data)
      fs.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body),  ()=>{})
      res.status(200).json(req.body)
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allBlogs"])
      // name, email, desc, phone
    }
  }