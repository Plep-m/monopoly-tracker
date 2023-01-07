/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import entity from '../../../assets/entity.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case 'GET':
      // read property data from JSON file ../../../assets/property.json and return it
      res.status(200).json(entity);
      break;
    default:
      // return error
      break;
  }
}
