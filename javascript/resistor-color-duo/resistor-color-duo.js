// Exercise Name: Resistor Color Duo

export const decodedValue = (colorBands) => {
  const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

  return parseInt(`${COLORS.indexOf(colorBands[0])}${COLORS.indexOf(colorBands[1])}`);
};
