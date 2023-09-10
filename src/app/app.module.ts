import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { IconsListComponent } from './components/icons-list/icons-list.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontendCardComponent } from './components/frontend-card/frontend-card.component';
import { IconImageComponent } from './components/icon-image/icon-image.component';
import { BackendCardComponent } from './components/backend-card/backend-card.component';
import { DatabasesCardComponent } from './components/databases-card/databases-card.component';
import { MovilesCardComponent } from './components/moviles-card/moviles-card.component';
import { IntegracionCardComponent } from './components/integracion-card/integracion-card.component';
import { HobbyCardComponent } from './components/hobby-card/hobby-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IconsListComponent,
    AboutCardComponent,
    ProjectCardComponent,
    MainCardComponent,
    FrontendCardComponent,
    IconImageComponent,
    BackendCardComponent,
    DatabasesCardComponent,
    MovilesCardComponent,
    IntegracionCardComponent,
    HobbyCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
