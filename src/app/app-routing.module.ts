import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  // { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  // { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  {
    path: 'movie',
    loadChildren: () => import('./pages/movie/movie.module').then( m => m.MoviePageModule)
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
