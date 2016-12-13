import React from 'react';
import { Link } from 'react-router';

export default class ArtistsList extends React.Component {
    render() {
        //Получанный массив из родителя
        let artists = this.props.artists;

        //Подготавливаем полученный массив для отображения
        const artistsList = artists.map(artist => 
            <Link className="list-group-item" 
                  key={artist.id} 
                  to={`${artist.id}/albums`}>
                  
                { artist.name }
            </Link>
        );
        //Возвращаем шаблон со списком исполнителей
        return (
            <div className="list-group">
                { artistsList }
            </div>
        );
    }
}
