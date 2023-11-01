import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClientComponent } from './client/client.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHomeComponent,
    ClientComponent,
    ClientHomeComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    SidenavComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
