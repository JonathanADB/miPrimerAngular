import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
