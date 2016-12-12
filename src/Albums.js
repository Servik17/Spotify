import React from 'react';
import axios from 'axios';

export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            artist: ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const query = `https://api.spotify.com/v1/artists/${this.props.params.id}/albums`;
        axios.get(query)
            .then((response) => {
                this.setState({
                    images: response.data.items.map(album => album.images[1]),
                    artist: response.data.items[0].artists[0].name
                })
            });
    }

    render() {
        
        return (
            <div id="images">
            
            </div>
        );
    }
}