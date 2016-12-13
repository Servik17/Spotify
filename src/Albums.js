import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';


export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        
        this.getAlbums(); //AJAX запрос на получение картинок альбомов
            
        this.state = {
            images: [], //Картинки альбомов
            artist: ''  //Имя исполнителя
        };
        
        this.getAlbums = this.getAlbums.bind(this);
    }
    
    //Функция получения картинок альбомов
    getAlbums() {
        //id исполнителя полученное из URL от родителя
        const id = this.props.params.id;
        //URL запроса
        const url = `https://api.spotify.com/v1/artists/${ id }/albums`;
        
        //AJAX запрос
        axios.get(url)
            .then(response => {
                //Выбор 1-ой картинки альбома из массива
                let images = response.data.items.map(album => album.images[1]);
                //Имя исполнителя
                let artist = response.data.items[0].artists[0].name;
                
                this.setState({
                    images: images,
                    artist: artist 
                });
            });
    }

    render() {
        //Подготовка массива картинок для отображения
        const images = this.state.images.map((img, ind) => {
            return <img src={ img.url } 
                        key={ ind } 
                        width="150" 
                        height="150" 
                        role="presentation" 
                        className="img-rounded"/>;
        });
        //Возвращаем шаблон со списком картинок альбомов
        return (
            <div id="images">
                <h1>
                    Альбомы { this.state.artist }
                </h1>
                <div>
                    {images}
                </div>
                <hr />
                <div>
                    <Link to="/">
                        <button className="btn btn-default">
                            <span className="glyphicon glyphicon-menu-left"></span> Назад
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
