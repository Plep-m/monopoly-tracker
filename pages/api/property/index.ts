import type { NextApiRequest, NextApiResponse } from 'next';
import JSONProperty from '../../../types/Property';
import property from '../../../assets/property.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSONProperty>,
) {
  // res.status(200).json({ name: 'John Doe' });
  switch (req.method) {
    case 'GET':
      // read property data from JSON file ../../../assets/property.json and return it
      res.status(200).json(property);
      break;
    default:
      // return error
      break;
  }
}
