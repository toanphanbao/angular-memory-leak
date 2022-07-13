import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  public getRandomNumber = (): Observable<number>=> {
    const observable$ = new Observable<number>((observer) => {
      setInterval(() => {
        observer.next(Math.floor(Math.random() * 10));
      }, 1000);
    });
    interval(1000,);

    return observable$;
  }
}
