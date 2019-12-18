import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './Home/Home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ManagerScreenComponent } from './manager-screen/manager-screen.component';
import { DataEntryScreenComponent } from './data-entry-screen/data-entry-screen.component';
import { CashierScreenComponent } from './cashier-screen/cashier-screen.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { ProductService } from './_services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    MainScreenComponent,
    ManagerScreenComponent,
    DataEntryScreenComponent,
    CashierScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
