class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url)  {
       
       
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(` Could not connect to ${url}, status ${res.status}`);
        }
            return await res.json();
        
    };

getAllCheractars() {
    return this.getResource('/characters?page=5&pageSize=10');
}
getCharacter(id) {
    return this.getResource(`/characters/${id}`);
}
}

const got = new GotService();

got.getAllCheractars()
.then(res => {
    console.log(res.forEach(element => console.log(element.name)));
    });

got.getCharacter(130)
.then(res => console.log(res));
