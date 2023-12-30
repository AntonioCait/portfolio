import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlaceholderComponent } from './home-placeholder.component';

describe('HomePlaceholderComponent', () => {
  let component: HomePlaceholderComponent;
  let fixture: ComponentFixture<HomePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
