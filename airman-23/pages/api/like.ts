// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../lib/client';
import { uuid } from 'uuidv4'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'PUT'){
    const {userId, productId, like} = req.body;

    const data = like ? await client
    .patch(productId)
    .setIfMissing({likes: []})
    .insert('after', 'likes[-1]', [
        {
            _key: uuid(),
            _ref: userId
        }
    ])
    .commit()
    : await client
    .patch(productId)
    .unset([`likes[_ref=="${userId}"]`])
    .commit();

    res.status(200).json(data);
  }
}