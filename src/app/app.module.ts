import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';   

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UpgradeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor( private Upgrade: UpgradeModule){
   }
   ngDoBootstrap(){
   this.Upgrade.bootstrap(document.documentElement, ['phonecatApp']);   
  }
}
