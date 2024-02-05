import { Routes } from '@angular/router';
import { IntroComponent } from './intro.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
    { path: 'intro', component: IntroComponent },
    {
        path: 'courses',
        loadComponent: () => import('./courses/courses-list.component').then(c => c.CoursesListComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/shell.component').then(c => c.ShellComponent)
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
