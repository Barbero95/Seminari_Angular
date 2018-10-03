import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './userDetails/user-details.component';
import { ObjDetailsComponent } from './objDetails/obj-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ObjDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
