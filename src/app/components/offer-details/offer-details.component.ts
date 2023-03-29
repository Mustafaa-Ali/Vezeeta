import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IOffer } from 'src/app/models/IOffer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  offersDetails:any= {};
  constructor(private Route:ActivatedRoute,private OffersService:OfferService){

  }
  ngOnInit(): void {
    let id = this.Route.snapshot.paramMap.get('id')
    // console.log(id);

    this.OffersService.getOffersDetails(id).subscribe((data)=>{
      this.offersDetails = data;
      console.log(data);
      
  })

}}
