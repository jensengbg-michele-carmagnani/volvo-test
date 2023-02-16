// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const jsonDirectory = path.join(process.cwd(), 'public/api');

  const carsArray = await fs.readFile(jsonDirectory + '/cars.json', 'utf8');

  res.status(200).json(carsArray);
}
