import React from 'react';
import { Link } from 'react-router';

export default class ArtistsList extends React.Component {
    render() {
        let artists = this.props.artists;

        const artistsList = artists.map(artist => 
            <Link className="list-group-item" key={artist.id} to={`${artist.id}/albums`}>
                { artist.name }
            </Link>
        );

        return (
            <div className="list-group">
                { artistsList }
            </div>
        );
    }
}