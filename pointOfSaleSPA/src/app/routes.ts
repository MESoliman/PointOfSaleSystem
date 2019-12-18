import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AuthGuard } from './_guards/auth.guard';
import { ManagerScreenComponent } from './manager-screen/manager-screen.component';
import { DataEntryScreenComponent } from './data-entry-screen/data-entry-screen.component';
import { CashierScreenComponent } from './cashier-screen/cashier-screen.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainScreenComponent},
    {path: 'manager', component: ManagerScreenComponent},
    {path: 'data', component: DataEntryScreenComponent},
    {path: 'cashier', component: CashierScreenComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
