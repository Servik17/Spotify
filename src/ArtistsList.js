import React from 'react';
import { Link } from 'react-router';

export default class ArtistsList extends React.Component {
    render() {
        let artists = this.props.artists;

        const artistsList = artists.map(artist => 
            <li key={artist.id}>
                <Link to={`${artist.id}/albums`}>
                    { artist.name }
                </Link>
            </li>
        );

        return (
            <ul>
                { artistsList }
            </ul>
        );
    }
}