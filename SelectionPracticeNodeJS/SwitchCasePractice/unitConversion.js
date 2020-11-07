const args = process.argv.slice(2);
let input = parseInt(args[0]);

const FEET_TO_INCHES_CONVERSION_UNIT = 12;
const INCHES_TO_FEET_CONVERSION_UNIT = 1 / FEET_TO_INCHES_CONVERSION_UNIT;
const METER_TO_FEET_CONVERSION_UNIT = 3.2808;
const FEET_TO_METER_CONVERSION_UNIT = 1 / METER_TO_FEET_CONVERSION_UNIT;
//1. Feet to Inch
console.log("1. " + input + " feet = " + (input * FEET_TO_INCHES_CONVERSION_UNIT) + " inches");
//2. Feet to Meter
console.log("1. " + input + " feet = " + (input * FEET_TO_METER_CONVERSION_UNIT).toFixed(2) + " meters");
//3. Inch to Feet
console.log("1. " + input + " inches = " + (input * INCHES_TO_FEET_CONVERSION_UNIT) + " feet");
//4. Meter to Feet
console.log("1. " + input + " meters = " + (input * METER_TO_FEET_CONVERSION_UNIT).toFixed(2) + " feet");
