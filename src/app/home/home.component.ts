import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  theatreMovies: any;
  PopularMovies: any;

  constructor(private http: HttpClient,private router: Router ) { }

  ngOnInit(): void {
    this.getTrendingMovie();
    this.getTheatreMovie();
    this.getPopularMovie();

  }
  getTrendingMovie() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
    });
  }
    getTheatreMovie() {
      this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
        this.theatreMovies = movies;
      });
    }
    getPopularMovie() {
      this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
        this.PopularMovies = movies;
      });
    }
    goToMovie(type: string, id: string) {
      this.router.navigate(['movie', type, id]);
    }
  }

