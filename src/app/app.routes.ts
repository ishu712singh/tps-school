import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { AcademicsComponent } from './features/academics/academics.component';
import { AdmissionsComponent } from './features/admissions/admissions.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent
  },
  {
    path: 'admissions',
    component: AdmissionsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
