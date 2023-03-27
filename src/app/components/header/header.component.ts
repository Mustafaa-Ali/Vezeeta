import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged:boolean;
  constructor(private AuthService:AuthService) {
    this.userLogged=this.AuthService.userLoggedState;
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
