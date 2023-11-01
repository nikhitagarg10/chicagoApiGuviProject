import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public artData:any = [];
  constructor(){}


  ngOnInit(): void {
  }
  title = 'artwork';
}
