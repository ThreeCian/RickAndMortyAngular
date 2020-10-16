import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';
import { ScriptManagerService } from './script-manager.service';
import { CardstsComponent } from './cardsts/cardsts.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, CardsComponent, CardstsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ScriptManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
