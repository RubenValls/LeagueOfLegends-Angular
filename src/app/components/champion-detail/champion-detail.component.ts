import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionDetails } from 'src/app/models/championDetails.model';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent {
  constructor(private activateRoute: ActivatedRoute){}
  championDetails: ChampionDetails = {
    id: '',
    name: '',
    title: '',
    blurb: '',
    partype: '',
    info: {
      attack: 0,
      defense: 0,
      difficulty: 0,
      magic: 0
    },
    stats: {
      armor: 0,
      armorperlevel: 0,
      attackdamage: 0,
      attackdamageperlevel: 0,
      attackrange: 0,
      attackspeed: 0,
      attackspeedperlevel: 0,
      crit: 0,
      critperlevel: 0,
      hp: 0,
      hpperlevel: 0,
      hpregen: 0,
      hpregenperlevel: 0,
      movespeed: 0,
      mp: 0,
      mpperlevel: 0,
      mpregen: 0,
      mpregenperlevel: 0,
      spellblock: 0,
      spellblockperlevel: 0,
    },
    tags: [],
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      const objetoJSON: any = params.get('data'); // Obtener la cadena JSON del parámetro de ruta
      this.championDetails = JSON.parse(objetoJSON);
    });
  }
}
