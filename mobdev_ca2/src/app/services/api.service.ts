import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { map } from `rxjs/operators`;


@Injectable({
    providedIn: 'root'
})

// export class ApiService {
 //  baseUrl = `https://www.breakingbadapi.com/api/`;
   // imageUrl = `https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846%22/`;


// }

    constructor(private http: HttpClient) { }

// getEpisode (offset = 0) {

  //  return this http.get (`$this.baseUrl`)/episode?offset=${offset}&infinit=25`).pipe(map(result => {return result [`results`];
//})





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
