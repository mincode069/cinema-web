import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatmovielistComponent } from './catmovielist.component';

describe('CatmovielistComponent', () => {
  let component: CatmovielistComponent;
  let fixture: ComponentFixture<CatmovielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatmovielistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatmovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
