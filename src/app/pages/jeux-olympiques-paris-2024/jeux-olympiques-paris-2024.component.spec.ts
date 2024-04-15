import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxOlympiquesParis2024Component } from './jeux-olympiques-paris-2024.component';

describe('JeuxOlympiquesParis2024Component', () => {
  let component: JeuxOlympiquesParis2024Component;
  let fixture: ComponentFixture<JeuxOlympiquesParis2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuxOlympiquesParis2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuxOlympiquesParis2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
