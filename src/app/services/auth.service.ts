import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Router} from '@angular/router';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedSubject: BehaviorSubject<boolean>;
  private fireauth: AngularFireAuth;

  constructor(fireauth: AngularFireAuth, private router: Router) {
    this.fireauth = fireauth;
    this.isUserLoggedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
    this.fireauth.authState.subscribe(user => {
      if (user) {
        this.isUserLoggedSubject.next(true);
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        this.isUserLoggedSubject.next(false);
        localStorage.removeItem('isAuthenticated');
      }
    });
  }

  public getFireAuth(): AngularFireAuth {
    return this.fireauth;
  }

  isLoggedIn(): boolean {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    return storedAuthStatus === 'true';
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/Home']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/signIn']);
      });
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Registration Successful');
        this.router.navigate(['/signIn']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/SignUp']);
      });
  }

  logout() {
    this.fireauth.signOut()
      .then(() => {
        localStorage.removeItem('isAuthenticated');
        this.router.navigate(['/signIn']);
      }, err => {
        alert(err.message);
      });
  }

  getLoggedStatus(): Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
  }
}
