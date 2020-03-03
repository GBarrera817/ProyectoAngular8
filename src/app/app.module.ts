import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente //declaracion del component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
