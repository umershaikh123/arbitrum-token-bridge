import type { NextApiRequest, NextApiResponse } from 'next';
import {  fetchNodeOperatorData} from '../../../util/graphQL/fetch';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchNodeOperatorData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nodeOperator data' });
  }
}