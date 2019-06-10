import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSkillsComponent } from './personal-skills.component';

describe('PersonalSkillsComponent', () => {
  let component: PersonalSkillsComponent;
  let fixture: ComponentFixture<PersonalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
