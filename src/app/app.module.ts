import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ButtonComponent,
    AboutComponent,
    SimpleCardComponent,
    LatestArticlesComponent,
    ImageCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
