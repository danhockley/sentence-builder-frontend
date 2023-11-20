import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordSelectionComponent } from './components/word-selection/word-selection.component';
import { SentenceDisplayComponent } from './components/sentence-display/sentence-display.component';

@NgModule({
  declarations: [
    AppComponent,
    WordSelectionComponent,
    SentenceDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
