import { IDoctor } from './../../models/IDoctor';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import {Observable} from 'rxjs';
import { CityService } from 'src/app/services/city.service';
import { ICity } from 'src/app/models/ICity';
import { IOffer } from 'src/app/models/IOffer';
import { OfferService } from 'src/app/services/offer.service';
import { ISpeciality } from 'src/app/models/ISpeciality';
import { SpecialityService } from 'src/app/services/speciality.service';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

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
  offerSlide1:IOffer[]= [];
  offerSlide2:IOffer[]= [];
  speciality:ISpeciality [] =[];
  specialityslide1:ISpeciality [] =[];
  specialityslide2:ISpeciality [] =[];
  selectedCityID:number=0;
  slideNum = 0;
  selectedSpecialityID:number=0;
  specialityOptions: string[] = [];
  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  selectedLanguage:string | undefined;

  constructor(private DS: DoctorsService, private CS:CityService, private OS:OfferService, private SS:SpecialityService) {
     this.filteredOptions = new Observable();
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
    console.log("offerSlide1",data[0])
   for(let i = 0; i<4; i++) {
   
    this.offerSlide1.push(data[i])
    
  }
   for(let i = 4; i<data.length; i++) {
    this.offerSlide2.push(data[i])
   
  }
   
  console.log("one",this.offerSlide1)
  console.log("two",this.offerSlide2)
   })
   this.SS.getSpecilaty().subscribe((data)=>{
    console.log("speciality",data);
    this.speciality = data;
    for(let i = 0; i<4; i++) {
   
      this.specialityslide1.push(data[i])
      
    }
     for(let i = 4; i<data.length; i++) {
      this.specialityslide2.push(data[i])
     
    }
   })



   
    

  
  }


  createRange(number: any){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }


  

  
  getCities(){
   

  }

}
