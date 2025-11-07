import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Blog } from './blog/blog';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Cv } from './cv/cv';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Amitendu Bikash Dhusiya',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects',
  },
  {
    path: 'blog',
    component: Blog,
    title: 'Blog',
  },
  {
    path: 'resume',
    component: Cv,
    title: 'Resume',
  },
  {
    path: '**',
    component: Pagenotfound,
    title: 'PAGE NOT FOUND ERROR',
  },
];
