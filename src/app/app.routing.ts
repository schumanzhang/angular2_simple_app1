//angular 2 router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//bring in components we need for the router
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);