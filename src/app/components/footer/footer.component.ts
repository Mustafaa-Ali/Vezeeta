import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translateservice:TranslateService) { }

  translate(event:any){
    this.translateservice.use(event.target.value)}

  ngOnInit() {
  }

}
