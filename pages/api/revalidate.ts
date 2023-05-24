// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=18622718bf50a9f25a69011d0b133a6b

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req : NextApiRequest, res : NextApiResponse){
if(req.query.secret !== process.env.MY_SECRET_TOKEN){
    return res.status(401).json({
        messsage : 'Invalid token'
    })
}
const path = req.query.path as string;
console.log("REQUEST QUERY IS ", req.query);
await res.revalidate(path);
return res.json({revalidated : true})
}