import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiProvider } from '../providers/api/api';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      FormsModule, ReactiveFormsModule
  ],
  providers: [ ApiProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
