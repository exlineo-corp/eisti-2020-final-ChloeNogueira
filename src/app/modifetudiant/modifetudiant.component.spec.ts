import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifetudiantComponent } from './modifetudiant.component';

describe('ModifetudiantComponent', () => {
  let component: ModifetudiantComponent;
  let fixture: ComponentFixture<ModifetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
