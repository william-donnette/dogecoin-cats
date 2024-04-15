import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JeuxOlympiquesParis2024Component } from './pages/jeux-olympiques-paris-2024/jeux-olympiques-paris-2024.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'jeux-olympiques-paris-2024',
    component: JeuxOlympiquesParis2024Component,
  },
  { path: '**', redirectTo: '' },
];
