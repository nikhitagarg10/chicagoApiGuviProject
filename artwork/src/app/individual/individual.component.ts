import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit{

  constructor(private route: ActivatedRoute, private ss: ServiceService){};

  public id = "";
  public prdData:any = [];
  ngOnInit(): void {

    //product Id fetched from the URL
    this.id = this.route.snapshot.paramMap.get("id") ?? "";

    if(this.id !== "")
    {
      this.ss.getParticularPrd(this.id).subscribe((data)=>{
        data.data.description = data.data.description.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<em>", "").replaceAll("</em>", "");
        console.log(data.data.description);
        this.prdData.push(data.data);
        console.log(this.prdData);
      });
    }
  }

 
}
