import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogLoaderComponent } from './dog-loader.component';

describe('DogLoaderComponent', () => {
  let component: DogLoaderComponent;
  let fixture: ComponentFixture<DogLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
