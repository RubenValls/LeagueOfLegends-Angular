import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { AllChampionsComponent } from './components/all-champions/all-champions.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'campeones', component: AllChampionsComponent},
  {path: ':id',component: ChampionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
