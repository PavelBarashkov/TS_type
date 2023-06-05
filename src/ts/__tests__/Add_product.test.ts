import { Movie } from "../Movie";
import { Product } from "../interface/product"


test('add movie', () => {
    const result: Product = {
        title_translation: 'Оно',
        title: 'It',
        year: 2020,
        country: 'USA',
        type: ['horor'],
        data: '12.12.12'
    };
    const film = new Movie();
    film.add({
        title_translation: 'Оно',
        title: 'It',
        year: 2020,
        country: 'USA',
        type: ['horor'],
        data: '12.12.12'
    }) 
    expect(result).toEqual(film.getAll()[0])
})