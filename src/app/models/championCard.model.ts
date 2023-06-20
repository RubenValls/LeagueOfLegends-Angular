import { Info } from "./championDetails.model";

export interface ChampionCard {
  id: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  tags: string[];
}
