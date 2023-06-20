export interface ChampionDetails {
  id: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  partype: string;
  stats: Stats;
  tags: string[];
}

export interface Info {
  attack: number;
  defense: number;
  difficulty: number;
  magic: number;
}

export interface Stats {
  armor: number;
  armorperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackrange: number;
  attackspeed: number;
  attackspeedperlevel: number;
  crit: number;
  critperlevel: number;
  hp: number;
  hpperlevel: number;
  hpregen: number;
  hpregenperlevel: number;
  movespeed: number;
  mp: number;
  mpperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
}
