import { IDoctor } from './../../models/IDoctor';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { CityService } from 'src/app/services/city.service';
import { ICity } from 'src/app/models/ICity';
import { IOffer } from 'src/app/models/IOffer';
import { OfferService } from 'src/app/services/offer.service';
import { ISpeciality } from 'src/app/models/ISpeciality';
import { SpecialityService } from 'src/app/services/speciality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Doctor: IDoctor[] = [];
  doctorName: string = "";
  cities: ICity[] = [];
  offers:IOffer[]= [];
  speciality:ISpeciality [] =[];
  selectedCityID:number=0;
  selectedSpecialityID:number=0;

  constructor(private DS: DoctorsService, private CS:CityService, private OS:OfferService, private SS:SpecialityService) {

  }

  SearchDoctor() {
    this.DS.getDoctor("Ahmed")
    // console.log(this.DS.doctors);
    this.Doctor = this.DS.doctors;
    console.log("this.Doctor");
  }

  ngOnInit(){
   this.CS.getCity().subscribe((data)=>{
    console.log("CITY",data);
    this.cities = data;
   })
   this.OS.getOffers().subscribe((data)=>{
    console.log("offers",data);
    this.offers = data;
   })
   this.SS.getSpecilaty().subscribe((data)=>{
    console.log("speciality",data);
    this.speciality = data;
   })
    
  }
  getCities(){
   

  }
}
