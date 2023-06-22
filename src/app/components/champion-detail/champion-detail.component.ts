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
}
