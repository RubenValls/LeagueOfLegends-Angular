import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChampionCard } from './models/championCard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  http = inject(HttpClient)
  title = 'LeagueOfLegends-Angular';
  champions: any[] = []

  ngOnInit() {
    this.http.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_ES/champion.json')
      .subscribe((data: any) => {
        this.champions = Object.entries(data.data);
      })
  }
}
