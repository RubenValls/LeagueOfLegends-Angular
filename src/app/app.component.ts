import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  
  title = 'LeagueOfLegends-Angular';

  homeNavigate(){
    this.router.navigate(['/']);
  }

  champsNavigate(){
    this.router.navigate(['/campeones']);
  }
}
