import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//mapas
import { AgmCoreModule } from '@agm/core';

//providers
import {MapasService} from './providers/mapas.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAotNPNXhjHBSsqntLw1lyJJEiJAaKUkdE'
    }),
    FormsModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
