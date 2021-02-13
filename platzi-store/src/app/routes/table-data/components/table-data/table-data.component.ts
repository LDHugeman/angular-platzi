import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/core/services/rickandmorty.service';
import { Character } from 'src/app/models/character';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  characters: Character[];
  dataArray: Student[] = [
    { id: 1, name: 'Pedro', lastName: 'Ruimarco' },
    { id: 2, name: 'Gil', lastName: 'Simoro' },
    { id: 3, name: 'Carlos', lastName: 'Rimazo' },
  ];
  displayedColumns: string[] = ['id', 'name', 'lastName'];
  characterColumns: string[] = ['id', 'name', 'species', 'status', 'type'];
  constructor(private rickAndMortyService: RickandmortyService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.rickAndMortyService.getAllCharacters().subscribe((characters) => {
      this.characters = characters;
      console.log(this.characters);
    });
  }
}
