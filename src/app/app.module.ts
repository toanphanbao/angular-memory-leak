import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryLeakPageComponent } from './memory-leak-page/memory-leak-page.component';
import { NormalPageComponent } from './normal-page/normal-page.component';
import { AnotherMemoryLeakPageComponent } from './another-memory-leak-page/another-memory-leak-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryLeakPageComponent,
    NormalPageComponent,
    AnotherMemoryLeakPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
