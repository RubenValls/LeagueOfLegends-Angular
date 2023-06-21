import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-all-champions',
  templateUrl: './all-champions.component.html',
  styleUrls: ['./all-champions.component.css']
})
export class AllChampionsComponent {
  http = inject(HttpClient)
  champions: any[] = []

  ngOnInit() {
    this.http.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_ES/champion.json')
      .subscribe((data: any) => {
        this.champions = Object.entries(data.data);
      })
  }
  addFind(filter: string){
    this.http.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_ES/champion.json')
      .subscribe((data: any) => {
        this.champions = Object.entries(data.data);
        if(filter){
          const filteredChamps = this.champions.filter((champion: any) => champion[1].name.toLowerCase().includes(filter.toLowerCase()))
          this.champions = filteredChamps
        }
    })
  }
}
