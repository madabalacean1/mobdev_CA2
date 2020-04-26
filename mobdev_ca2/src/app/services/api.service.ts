import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    [x: string]: any;
    constructor(private http: HttpClient) { }

      //getEpisodes() {
      // return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
// }

     getEpisodes() {
      return this.http.get(`https://8100-f0a6a1d7-fe17-49fd-8b7d-e9af6b734b31.ws-eu01.gitpod.io/assets/episodes.json`)
   }

   //getEpisode(id) {
   // return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
   // }

   getEpisode() {
    return this.http.get(`https://8100-f0a6a1d7-fe17-49fd-8b7d-e9af6b734b31.ws-eu01.gitpod.io/assets/episode.json`)
    }
   // getCharacters() {
       // return this.http.get(`https://www.breakingbadapi.com/api/characters`)
    //}

   getCharacters() {
   return this.http.get(`https://8100-f0a6a1d7-fe17-49fd-8b7d-e9af6b734b31.ws-eu01.gitpod.io/assets/characters.json`)
   }
   //getCharacter(id) {
    //return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  // }
    getCharacter() {
      return this.http.get(`https://8100-f0a6a1d7-fe17-49fd-8b7d-e9af6b734b31.ws-eu01.gitpod.io/assets/character.json`)
    }
    //getQuotes() {
      // return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
      // }

     getQuotes() {
     return this.http.get(`https://8100-f0a6a1d7-fe17-49fd-8b7d-e9af6b734b31.ws-eu01.gitpod.io/assets/quotes.json`)
    }
    getQuote() {
      return this.http.get(`https://8100-f0a6a1d7-fe17-49fd-8b7d-e9af6b734b31.ws-eu01.gitpod.io/assets/quote.json`)
   }

      //getQuote(id) {
       // return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
    //}
}