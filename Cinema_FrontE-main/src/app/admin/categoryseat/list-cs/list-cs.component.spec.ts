import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCsComponent } from './list-cs.component';

describe('ListCsComponent', () => {
  let component: ListCsComponent;
  let fixture: ComponentFixture<ListCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
