/* eslint-disable @typescript-eslint/no-explicit-any */
import Entity from '../interfaces/entity';
import Property from '../interfaces/property';

// parse property from json object
export function parseProperty(json: any): Property {
  return {
    name: json.name,
    price: json.price,
    rents: json.rents,
    mortgages: json.mortgages,
    houseCost: json.houseCost,
    hotelCost: json.hotelCost,
    color: json.color,
    group: json.group,
    houses: json.houses,
    hotel: json.hotel,
    mortgaged: json.mortgaged,
    owner: json.owner,
  };
}

// parse entity from json object
export function parseEntity(json: any): Entity {
  return {
    name: json.name,
    bank: json.bank,
    property: json.property,
  };
}

export default { parseProperty, parseEntity };
