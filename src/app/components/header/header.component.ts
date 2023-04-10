import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe((loggedIn: boolean) => {
      this.userLogged = loggedIn;
    });
  }


      onLogout(){
        this.authService.logout()
    }


    switchLanguage() {
      const lang = document.documentElement.lang;
      if (lang === 'en') {
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.lang = 'en';
      }
      location.reload();
    }

}
