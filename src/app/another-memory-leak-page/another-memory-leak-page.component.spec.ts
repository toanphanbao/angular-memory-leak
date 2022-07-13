import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherMemoryLeakPageComponent } from './another-memory-leak-page.component';

describe('AnotherMemoryLeakPageComponent', () => {
  let component: AnotherMemoryLeakPageComponent;
  let fixture: ComponentFixture<AnotherMemoryLeakPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherMemoryLeakPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherMemoryLeakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
