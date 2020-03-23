import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DbInstanceComponent } from './pages/login/login.component';
const routes: Routes = [
    {
        path: '', component: DbInstanceComponent,
    },
    {
        path: 'dashboard', component: HomeComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WcdwRoutingModule { }
