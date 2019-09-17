import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'e7e83bfb5e1b0f36fe5d5378c5347418';
        try{
            const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.result = result.data.recipes;
        }catch(error){
            alert(error);
        }
    }
}