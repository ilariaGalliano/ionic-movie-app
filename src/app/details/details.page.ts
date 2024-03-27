import { Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../interfaces/movie-interfaces';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline, arrowBackOutline} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage {

  // Services
  private movieService = inject(MovieService);
  private router = inject(Router);
  
  constructor() {
    // icons
    addIcons({
      cashOutline,
      calendarOutline,
      arrowBackOutline
    });
  }

  // movie = signal<MovieResult | null>;
  public movie: WritableSignal<MovieResult | null> = signal<MovieResult | null>(null);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

   // Load the movie details when the id changes through the URL :id parameter
  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe(movie => {
      console.log('movie', movie);
      this.movie.set(movie);
    })
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}