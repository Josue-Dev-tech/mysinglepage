import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { ComputerComponent } from './computer/computer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFacesnapComponent } from './single-facesnap/single-facesnap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    ComputerComponent,
    NavbarComponent,
    FaceSnapListComponent,
    ComputerListComponent,
    LandingPageComponent,
    SingleFacesnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
