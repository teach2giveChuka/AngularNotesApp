import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NotesFormComponent } from './notes-form.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NotesFormComponent', () => {
  let component: NotesFormComponent;
  let fixture: ComponentFixture<NotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotesFormComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: '123'}), // Mocking ActivatedRoute params if needed
            // Add other properties and methods you need to mock
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});