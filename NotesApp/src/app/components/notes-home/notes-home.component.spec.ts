import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesHomeComponent } from './notes-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NotesHomeComponent', () => {
  let component: NotesHomeComponent;
  let fixture: ComponentFixture<NotesHomeComponent>;

  beforeEach(async () => {
    const mockActivatedRoute = {
      snapshot: {
        data: {},
        queryParams: of({}),
        params: of({}),
      }
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NotesHomeComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});