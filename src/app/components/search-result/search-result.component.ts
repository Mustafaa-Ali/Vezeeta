import { DoctorsService } from 'src/app/services/doctors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  constructor (private DS: DoctorsService) {
    this.DS.doctors
  }
}
