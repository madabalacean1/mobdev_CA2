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
      return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/episodes.json`)
   }

   //getEpisode(id) {
   // return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
   // }

   getEpisode() {
    return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/episode.json`)
    }
   // getCharacters() {
       // return this.http.get(`https://www.breakingbadapi.com/api/characters`)
    //}

   getCharacters() {
   return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/characters.json`)
   }
   //getCharacter(id) {
    //return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  // }
    getCharacter() {
      return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/character.json`)
    }
    //getQuotes() {
      // return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
      // }

     getQuotes() {
     return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/quotes.json`)
    }
    getQuote() {
      return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/quote.json`)
   }

  getDeaths() {
      return this.http.get(`https://8100-b0265e1a-b789-4eca-8152-3d2eceaa80c3.ws-eu01.gitpod.io/assets/deaths.json`)
  }
  getDeath(name) {
      return this.http.get(`https://breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
  }

}

      //getQuote(id) {
       // return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
    //}
