import { Component, Input } from '@angular/core';
import { ChampionCard } from 'src/app/models/championCard.model';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css']
})
export class ChampionCardComponent {

  @Input() champion: ChampionCard = {
    id: '',
    name: '',
    title: '',
    blurb: '',
    info: {},
    tags: [],
  }


}
