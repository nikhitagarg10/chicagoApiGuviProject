import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private fb: FormBuilder, private ss: ServiceService){}


  searchForm = this.fb.group({
    searchValue: new FormControl('')
  });

  searchVal = "";
  onSubmit() {

    this.searchVal = this.searchForm.value['searchValue'];
    this.ss.getArtData(this.searchVal).subscribe((data)=>{
      console.log(data);
    });
    // this.ss.behaviourData.subscribe((data)=>{
    //   console.log(data,"inside header");
    // })
    // this.ss.getArtData(String(this.searchForm.value) ?? "");
  }

  //icons
  faCartShopping = faCartShopping;
  faHeart = faHeart;
  faMagnifyingGlass = faMagnifyingGlass;
}
