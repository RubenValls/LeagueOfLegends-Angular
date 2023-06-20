import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { AllChampionsComponent } from './components/all-champions/all-champions.component';
import { NgOptimizedImage } from '@angular/common';
;

@NgModule({
  declarations: [
    AppComponent,
    ChampionCardComponent,
    ChampionDetailComponent,
    AllChampionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
