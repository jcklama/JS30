import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { DrumkitComponent } from './drumkit/drumkit.component';
import { ClockComponent } from './clock/clock.component';
import { CSSVariablesComponent } from './cssvariables/cssvariables.component';
import { ArrayCardioOneComponent } from './array-cardio-one/array-cardio-one.component';
import { FlexPanelGalleryComponent } from './flex-panel-gallery/flex-panel-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOfContentsComponent,
    DrumkitComponent,
    ClockComponent,
    CSSVariablesComponent,
    ArrayCardioOneComponent,
    FlexPanelGalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'drumkit', pathMatch: 'full' },
      { path: 'drumkit', component: DrumkitComponent },
      { path: 'clock', component: ClockComponent },
      { path: 'cssVariables', component: CSSVariablesComponent },
      { path: 'arrayCardioOne', component: ArrayCardioOneComponent },
      { path: 'flexPanelGallery', component: FlexPanelGalleryComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
