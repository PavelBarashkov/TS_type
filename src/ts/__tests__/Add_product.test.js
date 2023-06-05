"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../Movie");
test('add movie', () => {
    const result = {
        title_translation: 'Оно',
        title: 'It',
        year: 2020,
        country: 'USA',
        type: ['horor'],
        data: '12.12.12'
    };
    const film = new Movie_1.Movie();
    film.add({
        title_translation: 'Оно',
        title: 'It',
        year: 2020,
        country: 'USA',
        type: ['horor'],
        data: '12.12.12'
    });
    expect(result).toEqual(film.getAll()[0]);
});
