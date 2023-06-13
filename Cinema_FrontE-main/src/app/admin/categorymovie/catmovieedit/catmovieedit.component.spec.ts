import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatmovieeditComponent } from './catmovieedit.component';

describe('CatmovieeditComponent', () => {
  let component: CatmovieeditComponent;
  let fixture: ComponentFixture<CatmovieeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatmovieeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatmovieeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
