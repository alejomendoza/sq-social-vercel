import { VercelRequest, VercelResponse } from '@vercel/node';
import { handleRequest } from './handler';

export default async (req: VercelRequest, res: VercelResponse) => {
  const image = await handleRequest(req);
  return res.send(image);
};
