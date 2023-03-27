import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedSubject:BehaviorSubject<boolean>;
  constructor( private fireauth:AngularFireAuth, private router:Router   ) {
    this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.userLoggedState);
   }
  // constructor (){}
  get userLoggedState():boolean {
    return (localStorage.getItem('token'))?true:false;
   }

    // login methed

  login(email:string ,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.isUserLoggedSubject.next(true);
      this.router.navigate(['/Home'])
    },err =>{
      alert(err.message);
      this.router.navigate(['/signIn'])
    })
  }

  // register method
  register(email:string ,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registeration Successful')
      this.router.navigate(['/signIn'])
    } ,err=>{
      alert(err.message);
      this.router.navigate(['/SignUp'])
    })
  }

  // signOut
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.isUserLoggedSubject.next(false);
      this.router.navigate(['/signIn'])
    }, err=>{
      alert(err.message);
    })
  }
  getLoggedStatus():Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
  }

}
