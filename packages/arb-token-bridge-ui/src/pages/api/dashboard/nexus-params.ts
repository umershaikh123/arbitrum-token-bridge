import type { NextApiRequest, NextApiResponse } from 'next';
import { getNexusContractParams } from '../../../util/Contract';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getNexusContractParams();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Nexus contract parameters' });
  }
}
