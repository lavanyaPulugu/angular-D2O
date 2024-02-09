import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaNewsComponent } from './visa-news.component';

describe('VisaNewsComponent', () => {
  let component: VisaNewsComponent;
  let fixture: ComponentFixture<VisaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
