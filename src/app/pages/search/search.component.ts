import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms"
import { from } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService:MovieApiServiceService) { }


  ngOnInit(): void {
  }

  searchResponse:any

  searchForm = new FormGroup({
    "movieName":new FormControl(null)
  })

  submitForm(){
    this.movieService.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      //console.log(result.results)
      this.searchResponse = result.results;
    })
  }

}
