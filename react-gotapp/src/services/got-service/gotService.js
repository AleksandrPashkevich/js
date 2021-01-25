//import { render } from "node-sass";
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async(url) => {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(` Could not connect to ${url}, status ${res.status}`);
        }
        return await res.json();
    };
   

     getAllCheractars = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);       
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return  this._transformCharacter(character);        
    }

    getAllHouses = async() => {
        const houses = await this.getResource('/houses/');
        return  houses.map(this._transformHouse);       
    }

    getHouse = async(id) =>{
        const house =await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);        
    }

    getAllBooks = async() => {
        const books = await this.getResource(`/books/`);    
        return books.map(this._transformBook);        
    }

    getBook = async(id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);        
    }

      isSet(data) {
          if (data){
              return data;
          } else{
              return '--== No data ==--'; 
          }
      }

      _exstractId = (item) => {
          const idReqExp = /\/([0-9]*)$/;
          return item.url.match(idReqExp)[1];
      }
      
    _transformCharacter = (char) => {
        return{
            id: this._exstractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    _transformHouse(house) {
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles:house.titles,
            overlord:house.overlord,
            ancestralWeapons:house.ancestralWeapons,
        }
    }

    _transformBook(book) {
        return{
            name: book.name,
            numberOfPages:book.numberOfPages,
            publisher:book.publisher,
            released:book.released
        }
    }
}




