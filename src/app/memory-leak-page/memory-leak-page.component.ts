import { RandomService } from './../random.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leak-page',
  templateUrl: './memory-leak-page.component.html',
  styleUrls: ['./memory-leak-page.component.css']
})
export class MemoryLeakPageComponent implements OnInit, OnDestroy {
  randomNumberSubscription$?: Subscription;
  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
    this.randomNumberSubscription$ = this.randomService
      .getRandomNumber()
      .subscribe(randomNumber =>
        console.log(`from MemoryLeakPageComponent, randomNumber: ${randomNumber}`));
  }

  ngOnDestroy(): void {
    // call unsubscribe method to prevent memory leak
    // this.randomNumberSubscription$
    //   ?.unsubscribe();
  }
}
