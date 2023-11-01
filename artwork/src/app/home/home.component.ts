import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Length = 100;
  PageSize = 10;
  PageIndex = 0;

  HidePageSize = false;
  ShowPageSizeOptions = true;
  ShowFirstLastButtons = true;
  Disabled = false;

  PageEvent!: PageEvent;
  
  
  StartData = 0;
  EndData = this.PageSize;
  HandlePageEvent(e: PageEvent) {
    this.PageEvent = e;
    this.Length = e.length;
    this.PageSize = e.pageSize;
    this.PageIndex = e.pageIndex;
    
    this.StartData = 10*this.PageIndex;
    this.EndData = this.StartData + this.PageSize;

    this.artSliceData = this.artData.slice(this.StartData, this.EndData);
  }

  public artData:any = [];
  public artSliceData:any = [];
  constructor(private ss: ServiceService){}

  faHeart = faHeart;
  
  searchParams = "";
  ngOnInit(): void {

    //retriving the data from the service file

    this.ss.getArtData("").subscribe((data) =>{
      this.artData = data.data;
      this.artSliceData = this.artData.slice(this.StartData, this.EndData);
    });

    this.ss.behaviourData.subscribe((data)=>{
      // console.log(data);
      this.artData = data.data;
      if(this.artData){
        console.log(this.artData);
        this.artSliceData = this.artData.slice(this.StartData, this.EndData);
      }
    })
    // console.log();
  }

  public wishList = [];

}


// this.ss.subData.subscribe(
    //   {next: (response)=>{
    //     console.log(response.data);
    //     this.artData = response.data;
    //   }});

    // console.log(this.ss.getArtData("").subscribe(data=> {console.log(data);}));
    // .subscribe((res)=>console.log(res));
