import { Subscription, Observable, takeUntil, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-another-memory-leak-page',
  templateUrl: './another-memory-leak-page.component.html',
  styleUrls: ['./another-memory-leak-page.component.css']
})
export class AnotherMemoryLeakPageComponent implements OnInit {
  randomNumberSubscription$?: Subscription;
  destroy$ = new Subject<void>();

  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
    this.randomNumberSubscription$ = this.randomService
      .getRandomNumber()
      .pipe(takeUntil(this.destroy$))
      .subscribe(randomNumber =>
        console.log(`from AnotherMemoryLeakPageComponent, randomNumber: ${randomNumber}`));
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
