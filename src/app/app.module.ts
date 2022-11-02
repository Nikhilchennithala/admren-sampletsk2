import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from './material/material/material.module';
import { StoriesPointComponent } from './views/stories-point/stories-point.component';
import { AddStoryComponent } from './views/add-story/add-story.component';
import { AutoSelectComponent } from './views/auto-select/auto-select.component';
import { SprintCalculatorComponent } from './views/sprint-calculator/sprint-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    StoriesPointComponent,
    AddStoryComponent,
    AutoSelectComponent,
    SprintCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
