import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComingComponent } from './movies-coming.component';

describe('MoviesComingComponent', () => {
  let component: MoviesComingComponent;
  let fixture: ComponentFixture<MoviesComingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
