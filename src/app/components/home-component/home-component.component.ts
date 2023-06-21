import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { defaultChampions } from 'src/constants/defaultChampions';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  constructor(private router: Router) {}
  championSelected = 0
  type = 'assassin'
  defaultChampions = defaultChampions
  lolNavigate(){
    window.location.href = 'https://signup.leagueoflegends.com/es-es/signup/index'
  }
  changeChampion(number: number, type: string){
    this.championSelected = number;
    this.type = type
  }
  champsNavigate(){
    this.router.navigate(['/campeones']);
  }
}
