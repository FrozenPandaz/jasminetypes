
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [AppComponent]
})
export class AppModule { }
