import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButonDeleteAllComponent } from './todo-buton-delete-all.component';

describe('TodoButonDeleteAllComponent', () => {
  let component: TodoButonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButonDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
