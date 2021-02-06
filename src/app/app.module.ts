import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './crud/home/home.component';
import { UpdateComponent } from './crud/update/update.component';
import { CreateComponent } from './crud/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    // CreateComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
