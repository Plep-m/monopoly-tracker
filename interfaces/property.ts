/* eslint-disable semi */
// monopoly property interface
export default interface Property {
    name: string;
    price: number;
    rents: number[];
    mortgages: number[];
    houseCost: number;
    hotelCost: number;
    color: string;
    group: string;
    houses: number;
    hotel: boolean;
    mortgaged: boolean;
    owner: string;
}
