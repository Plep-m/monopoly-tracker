/* eslint-disable semi */
// This code extracts the name, bank, and property values from a JSON object.
// The JSON object is passed in as a parameter named "entity" describe either the bank or a player.
export default interface Entity {
    name: string;
    bank: number;
    property: number[];
}
