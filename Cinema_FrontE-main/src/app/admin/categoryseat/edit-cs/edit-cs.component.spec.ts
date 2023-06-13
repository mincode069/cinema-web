import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCsComponent } from './edit-cs.component';

describe('EditCsComponent', () => {
  let component: EditCsComponent;
  let fixture: ComponentFixture<EditCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
