import { IDoctor } from './../models/IDoctor';
import { collection, query, where, getDocs, Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors: IDoctor[] = []

  constructor(private firestore: Firestore) { }

  getDoctors() {
    let doctorRef = collection(this.firestore, "Doctor")
    return collectionData(doctorRef, { idField: "id" }) as Observable<IDoctor[]>
  }
  async getDoctor(name: string) {
    let doctorRef = collection(this.firestore, "Doctor")
    const q = query(doctorRef, where("Name", "==", name));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      this.doctors.push(doc.data() as IDoctor);
      
      console.log(this.doctors);
    });
    return this.doctors;
  }
}
