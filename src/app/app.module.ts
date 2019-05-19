import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatInputModule, MatSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UseriaService } from './useria.service';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [UseriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
