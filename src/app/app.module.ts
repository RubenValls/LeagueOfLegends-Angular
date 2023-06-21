import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { AllChampionsComponent } from './components/all-champions/all-champions.component';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponentComponent } from './home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionCardComponent,
    ChampionDetailComponent,
    AllChampionsComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
