import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core' ;
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    }),
    AgmDirectionModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
