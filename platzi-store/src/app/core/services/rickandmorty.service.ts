import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  constructor(private http: HttpClient) {}

  URL = 'https://rickandmortyapi.com/api/character';
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.URL).pipe(
      map((response: any) =>
        response.results.map((result) => ({
          id: result.id,
          name: result.name,
          status: result.status,
          species: result.species,
          type: result.type,
        }))
      )
    );
  }
}
