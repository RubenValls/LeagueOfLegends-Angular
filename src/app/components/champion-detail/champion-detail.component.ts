import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionDetails } from 'src/app/models/championDetails.model';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent {
  constructor(private activateRoute: ActivatedRoute){}
  http = inject(HttpClient)
  championDetails: any = {}
  habilityName: string = ''
  habilityDescription: string = ''
  video: string = ''

  ngOnInit() {
      window.scrollTo({top: 0, behavior: 'smooth'});
      this.http.get(`https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_ES/champion${location.pathname}.json`)
      .subscribe((data: any) => {
        this.championDetails = Object.values(data.data)[0];
        console.log(Object.values(data.data)[0])
        this.setAttackProgress(this.championDetails.info.attack)
        this.setMagicProgress(this.championDetails.info.magic)
        this.setDefenseProgress(this.championDetails.info.defense)
        this.setDifficultProgress(this.championDetails.info.difficulty)
        this.habilityName = this.championDetails.passive.name
        this.habilityDescription = this.championDetails.passive.description
        this.video = this.championDetails.key.length === 2
          ? `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/00${this.championDetails.key}/ability_00${this.championDetails.key}_P1.webm`
          : this.video = this.championDetails.key.length === 1
            ? `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/000${this.championDetails.key}/ability_000${this.championDetails.key}_P1.webm`
            : `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${this.championDetails.key}/ability_0${this.championDetails.key}_P1.webm`
      })
  }
  setAttackProgress(attack: number){
    const bar: any = document.querySelector(".attackbar");
    bar.style.setProperty("--progress", `${attack*10}%`);

  }
  setMagicProgress(magic: number){
    const bar: any = document.querySelector(".magicbar");
    bar.style.setProperty("--progress", `${magic*10}%`);
  }
  setDefenseProgress(defense: number){
    const bar: any = document.querySelector(".defensebar");
    bar.style.setProperty("--progress", `${defense*10}%`);
  }
  setDifficultProgress(difficult: number){
    const bar: any = document.querySelector(".difficultbar");
    bar.style.setProperty("--progress", `${difficult*10}%`);
  }

  setHability(name:any, description:any, key:any, hability: string){
    this.habilityName = name
    this.habilityDescription = description
    this.video = key.length === 2
          ? `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/00${key}/ability_00${key}_${hability}.webm`
          : this.video = key.length === 1
            ? `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/000${key}/ability_000${key}_${hability}.webm`
            : `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_${hability}.webm`
  }

  lolChampNavigate(champion: string){
    window.location.href = `https://www.leagueoflegends.com/es-es/champions/${champion}/`;
  }
}
