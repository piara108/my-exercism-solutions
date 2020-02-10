// Exercise: DnD Character

export const abilityModifier = () => {
  // (constitution - 10) / 2
};

export class Character {
  static rollAbility() {
    let rolls = [];

    for(var x = 1; x <= 4; x++) {
      rolls.push(Math.random() * (6 - 1) + 1);
    }

    return rolls;
  }

  get strength() {
    throw new Error("Remove this statement and implement this function");
  }

  get dexterity() {
    throw new Error("Remove this statement and implement this function");
  }

  get constitution() {
    throw new Error("Remove this statement and implement this function");
  }

  get intelligence() {
    throw new Error("Remove this statement and implement this function");
  }

  get wisdom() {
    throw new Error("Remove this statement and implement this function");
  }

  get charisma() {
    throw new Error("Remove this statement and implement this function");
  }

  get hitpoints() {
    throw new Error("Remove this statement and implement this function");
  }
}
