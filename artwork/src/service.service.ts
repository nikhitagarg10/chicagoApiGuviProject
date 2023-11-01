import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  // private artworkUrl = "https://api.artic.edu/api/v1/artworks?page=100&limit=12";

  searchParam = "";
  artworkSearchUrl = "";

  public behaviourData = new BehaviorSubject<any>([]);
  
  //fetching the data from the API
  getArtData(search:string): Observable<any>
  {
    // console.log("function called: "+ search);
    if(search === "")
    {
      this.artworkSearchUrl = `https://api.artic.edu/api/v1/artworks?page=10&limit=100`
    }
    else{
      this.artworkSearchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${search}`;
    }
    
    // console.log(this.artworkSearchUrl);
    return this.http.get<any>(this.artworkSearchUrl).pipe(map((res:any)=>{
      this.behaviourData.next(res);
      // console.log(res);
      return res;
    }));
  }

  getParticularPrd(id:string)
  {
    this.artworkSearchUrl = `https://api.artic.edu/api/v1/artworks/${id}`
    return this.http.get<any>(this.artworkSearchUrl);
  }

  
}