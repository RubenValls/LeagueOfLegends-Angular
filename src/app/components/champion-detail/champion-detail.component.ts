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

  ngOnInit() {
      this.http.get(`https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_ES/champion${location.pathname}.json`)
      .subscribe((data: any) => {
        this.championDetails = Object.values(data.data)[0];
        console.log(Object.values(data.data)[0])
      })
  }
  setAttackProgress(attack: number){
    const bar: any = document.querySelector(".attackbar");
    setTimeout(() => {
      bar.style.setProperty("--progress", `${attack*10}%`);
    }, 500);
  }
  setMagicProgress(magic: number){
    const bar: any = document.querySelector(".magicbar");
    setTimeout(() => {
      bar.style.setProperty("--progress", `${magic*10}%`);
    }, 500);
  }
  setDefenseProgress(defense: number){
    const bar: any = document.querySelector(".defensebar");
    setTimeout(() => {
      bar.style.setProperty("--progress", `${defense*10}%`);
    }, 500);
  }
  setDifficultProgress(difficult: number){
    const bar: any = document.querySelector(".difficultbar");
    setTimeout(() => {
      bar.style.setProperty("--progress", `${difficult*10}%`);
    }, 500);
  }
}
