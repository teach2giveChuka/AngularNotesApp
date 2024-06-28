import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteService } from './note.service';
import { Note } from '../interfaces/formInterface';

describe('NoteService', () => {
  let service: NoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoteService]
    });
    service = TestBed.inject(NoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should Get All notes', () => {
    const dummyNotes: Note[] = [
      { id: '1', title: 'Test Note 1', content: 'Content 1' },
      { id: '2', title: 'Test Note 2', content: 'Content 2' }
    ];

    service.getAllNotes().subscribe(notes => {
      expect(notes.length).toBe(2);
      expect(notes).toEqual(dummyNotes);
    });

    const request = httpMock.expectOne(`${service['allUrl']}`);
    expect(request.request.method).toBe('GET');
    request.flush({ recordset: dummyNotes });
  });


  it('should delete a note by ID', () => {
    const dummyNoteId = '1';
    // note to future self{[Use a square brackets to access private properties of a class in a test file.]]}
    const expectedUrl = `${service['rootUrl']}/delete/${dummyNoteId}`;

    service.deleteNoteById(dummyNoteId).subscribe((response) => {
      expect(response).toBeNull(); //note to future slef: {[Use expect(response).toBeNull() to test for null values.]}
    });

    const request = httpMock.expectOne(expectedUrl);
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
  it('should create a new note', () => {
    const dummyFormData = { title: 'Test Note 1', content: 'Content 1' };
    const expectedUrl = `${service['rootUrl']}/new`;
    service.createNote(dummyFormData).subscribe((response) => {
      expect(response).toBeNull();
    });
    const request = httpMock.expectOne(expectedUrl);
    expect(request.request.method).toBe('POST');
    request.flush(null);
  });

  it('should update a note by ID', () => {
    const testNote: Note = { id: '123', title: 'Test Note', content: 'This is a test' };
    const updateId = '123';
    const expectedUrl = `${service['rootUrl']}/update/${updateId}`;
    service.updateNoteById(updateId, testNote).subscribe(response => {
      expect(response).toEqual(testNote);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(testNote);
    req.flush(testNote);
  });




});