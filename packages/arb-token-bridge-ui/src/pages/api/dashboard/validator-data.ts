import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchValidatorData } from '../../../util/graphQL/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchValidatorData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch validator data' });
  }
}