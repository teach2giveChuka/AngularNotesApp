import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Note } from '../../interfaces/formInterface';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-notes-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule, ReversePipe],
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.css']
})


export class NotesHomeComponent {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {
    this.noteService.getAllNotes().subscribe(res => {
      this.notes = res;
      console.log(res);
      
    });
  }

  getNotes() {
    this.noteService.getAllNotes().subscribe(res =>{
      return this.notes = res;
      console.log(res)
    })
   
  }

  deleteNote(index: number, id: string) {
    this.noteService.deleteNoteById(id).subscribe(
      () => {
        // Remove the deleted note from the local array
        this.notes.splice(index, 1);
        console.log(`Note with ID ${id} deleted`);
      },
      (error) => {
        console.error(`Failed to delete note with ID ${id}: `, error);
      }
    );
  }


}