import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-homevisit',
  templateUrl: './homevisit.component.html',
  styleUrls: ['./homevisit.component.scss']
})
export class HomevisitComponent {
  appointmentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    preferredDate: new FormControl('', Validators.required),
    preferredTime: new FormControl('', Validators.required),
    medicalSpeciality: new FormControl('', Validators.required),
    notes: new FormControl('')
  });
  onSubmit() {
    
    
  }

}
