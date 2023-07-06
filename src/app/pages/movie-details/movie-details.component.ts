import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService:MovieApiServiceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let movieParamId = this.router.snapshot.paramMap.get("id")
    this.getMovie(movieParamId);
    this.getVideo(movieParamId)
    this.getCast(movieParamId)
  }

  movieDetailResponse:any={}
  posterPath:string=""
  trailerResult:any
  castResult:any

  getMovie(id:any){
    this.movieService.getMovieDetails(id).subscribe((result)=>{
      console.log("movie result:", result)
      this.movieDetailResponse = result
      this.posterPath = result.poster_path;
    })
  }

  getVideo(id:any){
    this.movieService.getMovieVideo(id).subscribe((result)=>{
      console.log("video result",result)
      result.results.forEach((item:any)=>{
        if(item.type == "Trailer"){
          this.trailerResult = item.key
        }
      })
    })
  }

  getCast(id:any){
    this.movieService.getMovieCast(id).subscribe((result)=>{
      console.log("cast result",result)
      this.castResult = result.cast
    })
  }

  
}
