import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { TileComponent } from './tiles-list/tile/tile.component';
import { TilesListComponent } from './tiles-list/tiles-list.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TileComponent,
    TilesListComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
