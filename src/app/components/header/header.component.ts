import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged:boolean;
  currentLang:string | undefined;

  constructor(private AuthService:AuthService,public translateservice:TranslateService) {
    this.userLogged=this.AuthService.userLoggedState;
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translateservice.use(this.currentLang)
  }
  
  changeCurrentLang(lang:string){
    this.translateservice.use(lang)
    localStorage.setItem('currentLang',lang)
  }
  
  ngOnInit(): void {
    this.AuthService.getLoggedStatus().subscribe(result=>{
      this.userLogged=result;
      // console.log(this.userLogged);

    })

      }
      
      onLogout(){
        this.AuthService.logout()
    }
}
