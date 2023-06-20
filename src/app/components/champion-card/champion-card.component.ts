import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChampionCard } from 'src/app/models/championCard.model';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css']
})
export class ChampionCardComponent {
  constructor(private router: Router) {}

  @Input() champion: ChampionCard = {
    id: '',
    name: '',
    title: '',
    blurb: '',
    info: {
      attack: 0,
      defense: 0,
      difficulty: 0,
      magic: 0
    },
    tags: [],
  }

  navigate() {
    const championJSON = JSON.stringify(this.champion)
    this.router.navigate(['detalle', {data: championJSON}]);
  }

}
