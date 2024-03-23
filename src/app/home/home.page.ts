import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit{
  // services 
  movieSrv = inject(MovieService)

  ngOnInit(): void {
    this.getMovieTop()
   }

  getMovieTop() {
    this.movieSrv.getTopRatedMovies().subscribe((res)  => {
      console.log('res', res)
    })

    
  }
}
