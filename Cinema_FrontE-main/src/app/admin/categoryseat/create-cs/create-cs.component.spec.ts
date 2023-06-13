import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCsComponent } from './create-cs.component';

describe('CreateCsComponent', () => {
  let component: CreateCsComponent;
  let fixture: ComponentFixture<CreateCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
