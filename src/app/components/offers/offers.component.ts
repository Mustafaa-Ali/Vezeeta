import { Component, OnInit } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IOffer } from 'src/app/models/IOffer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers:IOffer[]= [];

  constructor(private OffersService:OfferService,private router:Router){

  }
  ngOnInit(): void {
    // this.offers = [
    //   {id:"1",Available:true,BookingDate:"March 15, 2022",Description:"asa",Discount:20,DoctorName:"Ahmed",ImgUrl:"https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/53401/_next/static/images/offers/vision_correction/desktop.webp",Location:"cairo",Price:20,SessionName:"Scalling"},
    //   {id:"2",Available:true,BookingDate:"March 15, 2022",Description:"asa",Discount:20,DoctorName:"Ahmed",ImgUrl:"https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/53401/_next/static/images/offers/vision_correction/desktop.webp",Location:"cairo",Price:20,SessionName:"Scalling"},
    // ]
    this.OffersService.getOffers().subscribe((data)=>{
      this.offers = data;
      
      
      
      
      
    })
    console.log(this.OffersService.getOffers());
    
  }

  goToDetails(id:any){
    this.router.navigate(['OfferDetails',id])

    console.log(id);
    
  }
}
