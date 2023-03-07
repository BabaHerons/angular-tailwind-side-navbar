import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NavbarMobileComponent } from './header/navbar-mobile/navbar-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    NavbarMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
