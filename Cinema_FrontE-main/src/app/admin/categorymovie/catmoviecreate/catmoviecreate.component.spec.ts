import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatmoviecreateComponent } from './catmoviecreate.component';

describe('CatmoviecreateComponent', () => {
  let component: CatmoviecreateComponent;
  let fixture: ComponentFixture<CatmoviecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatmoviecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatmoviecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
