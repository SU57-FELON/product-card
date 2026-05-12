class FighterJet {
  constructor(MaxSpeed, weapons, country) {
    this.MaxSpeed = MaxSpeed;
    this.weapons = weapons;
    this.country = country;
  }
}

class Su_35S extends FighterJet {
  constructor(MaxSpeed, weapons, country) {
    super(MaxSpeed, weapons, country);
    this.tvc = true;
  }
}

class F_15EX extends FighterJet {
  constructor(MaxSpeed, weapons, country) {
    super(MaxSpeed, weapons, country);
    this.aesa = true;
  }
}

class Eurofighter_Typhoon extends FighterJet {
  constructor(MaxSpeed, weapons, country) {
    super(MaxSpeed, weapons, country);
    this.catobar = true;
  } 
}

const su_35s = new Su_35S(2500, ['R-77', 'R-73'], 'Russia');
const f_15ex = new F_15EX(2655, ['AIM-120', 'AIM-9'], 'USA');
const eurofighter_typhoon = new Eurofighter_Typhoon(2495, ['Meteor', 'ASRAAM'], 'Europe');

console.log(su_35s);
console.log(f_15ex);
console.log(eurofighter_typhoon);