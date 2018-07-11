import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path: 'about',
        component : AboutComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
      }
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}