import { Component, OnInit  } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { ActivatedRoute } from "@angular/router";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ss: ServiceService){}

  public wishData:any = [];
  public wishList:any = [];
  id = "";
  
  ngOnInit(): void {
    //product Id fetched from the URL
    this.id = this.route.snapshot.paramMap.get("id") ?? "";

    //retriving the data from the service file
    if(this.id !== "")
    {
      this.ss.getParticularPrd(this.id).subscribe((data)=>{
        this.wishData = data.data;
        console.log(this.wishData);
        this.setdata()
      });
    }
    else{
      this.accessdata();
    }
    
  }


  flag = true;
  setdata(){
    this.wishList = JSON.parse(localStorage.getItem("wishlist") as string) || [];
    console.log(typeof(this.wishList));

    this.wishList.forEach((element:any) => {
      if(element.id === this.wishData.id){
        console.warn("already prseent");
        this.flag = false;
      }
    });


    if(this.flag){
      this.wishList.push(this.wishData);
    }
    console.log(this.wishList);
    localStorage.setItem("wishlist", JSON.stringify(this.wishList));
    }
  
    accessdata(){
      this.wishList = JSON.parse(localStorage.getItem("wishlist") as string) || [];
    }

    removeitem(remove_id:number)
    {
      this.wishList = JSON.parse(localStorage.getItem("wishlist") as string) || [];
      this.wishList = this.wishList.filter((element:any) => { return element.id != remove_id;});
      localStorage.setItem("wishlist", JSON.stringify(this.wishList));
    }

    faCircleXmark = faCircleXmark;
}
