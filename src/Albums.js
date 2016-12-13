import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';


export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        axios.get(`https://api.spotify.com/v1/artists/${this.props.params.id}/albums`)
            .then((response) => {
                this.setState({
                    images: response.data.items.map(album => album.images[1]),
                    artist: response.data.items[0].artists[0].name
                });
            });
        this.state = {
            images: [],
            artist: ''
        };
    }

    render() {
        const images = this.state.images.map((img, ind) => {
            return <img src={img.url} key={ind} width="150" height="150" role="presentation" className="img-rounded"/>;
        });
        
        return (
            <div id="images">
                <h1>Альбомы { this.state.artist }</h1>
                <div>
                    {images}
                </div>
                <hr />
                <div>
                    <Link to="/"><button className="btn btn-default"><span className="glyphicon glyphicon-menu-left"></span> Назад</button></Link>
                </div>
            </div>
        );
    }
}