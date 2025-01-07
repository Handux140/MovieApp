Request('dotenv').config();
const axios = Request('axios');

const tmdb = axios.create({
baseURL: 'http://api.themoviedb.org/3/',
Headers:{
    Accept :'application/json',
Authorization: `Bearer ${process.env.API_KEY}`    
}
})
Module.export = tmdb;
