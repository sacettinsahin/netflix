import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.themoviedb.org/3';
  apikKey = '3ce9da13f6eaf5635356dabd4e11d350';

  //bannerApiData
  bannerApiUrl: string = `${this.baseUrl}/trending/all/week?api_key=${this.apikKey}`;

  bannerApiData(): Observable<any> {
    return this.http.get(this.bannerApiUrl);
  }

  //trendingApiData
  trendingApiUrl: string = `${this.baseUrl}/trending/movie/day?api_key=${this.apikKey}`;

  trendingApiData(): Observable<any> {
    return this.http.get(this.trendingApiUrl);
  }

  // searchMovie
  getSearchMovie(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apikKey}&query=${data.movieName}`
    );
  }
  // getmovieDetails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apikKey}`
    );
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/videos?api_key=${this.apikKey}`
    );
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/credits?api_key=${this.apikKey}`
    );
  }

  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikKey}&with_genres=53`);
  }
}
