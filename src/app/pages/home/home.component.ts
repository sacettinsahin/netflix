import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieApiServiceService) { }

  bannerDataResponse:any=[]
  trendingDataResponse:any=[]
  actionMoviesResult:any[] = []
  adventureMoviesResult:any[] = []
  animationMoviesResult:any[] = []
  comedyMoviesResult:any[] = []
  documentaryMoviesResult:any[] = []
  sciencefictionMoviesResult:any[] = []
  thrillerMoviesResult:any[] = []

  ngOnInit(): void {
    this.getBannerData()
    this.getTrendingData()
    this.ActionMovie()
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  //bannerData
  getBannerData(){
    this.movieService.bannerApiData().subscribe((result)=>{
      console.log("banner result:", result)
      this.bannerDataResponse= result.results
    })
  }

  //trendingData
  getTrendingData(){
    this.movieService.trendingApiData().subscribe((result)=>{
      console.log("trend result",result)
      this.trendingDataResponse = result.results
    })
  }

  //action
  ActionMovie(){
    this.movieService.fetchActionMovies().subscribe((result)=>{
      console.log("action result", result)
      this.actionMoviesResult = result.results
    })
  }

  // adventure 
  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMoviesResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((result) => {
      this.animationMoviesResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((result) => {
      this.comedyMoviesResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMoviesResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMoviesResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMoviesResult = result.results;
    });
  }




}
