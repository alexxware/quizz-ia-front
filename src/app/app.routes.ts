import { Routes } from '@angular/router';
import { HomePageComponent } from './quizz-generate/pages/home-page/home-page';
import { QuizzPageComponent } from './quizz-generate/pages/quizz-page/quizz-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'quizz',
    component: QuizzPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
