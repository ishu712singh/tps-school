import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'academics',
    loadComponent: () => import('./features/academics/academics.component').then(m => m.AcademicsComponent)
  },
  {
    path: 'admissions',
    loadComponent: () => import('./features/admissions/admissions.component').then(m => m.AdmissionsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
