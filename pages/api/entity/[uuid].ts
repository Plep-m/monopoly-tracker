/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
// import JSONEntity from '../../../types/Entity';
import entity from '../../../assets/entity.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  // res.status(200).json({ name: 'John Doe' });
  const newEntity = req.body;
  switch (req.method) {
    case 'POST':
      // write property data to JSON file ../../../assets/property.json
      fs.readFile('assets/entity.json', 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        }
        // Parse the data into a JSON object
        const json = JSON.parse(data);

        // Add the new object to the array
        json.entity.push(newEntity);

        // Write the modified JSON object to the file
        fs.writeFile('assets/entity.json', JSON.stringify(json), 'utf8', (err) => {
          if (err) {
            res.status(500).send('Error writing file');
            return;
          }
          res.status(200).send('OK');
        });
      });
      break;
    default:
      // return error
      break;
  }
}
