import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieHeroComponent } from "./features/movies/components/movie-hero/movie-hero.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, FooterComponent, NavigationComponent, MovieHeroComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
