import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
    path : '' ,
    loadComponent : () => import('./feature/home/ui/home').then((c) => c.Home)
    },


    {
    path : '' ,
    redirectTo : '',
    pathMatch : 'full'
    },
    {
    path : '**' ,
    redirectTo : '',
    pathMatch : 'full'
    }

];
