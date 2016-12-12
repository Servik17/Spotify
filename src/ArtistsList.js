import React from 'react';

export default class ArtistsList extends React.Component {
    render() {
        const list = this.props.artists.map(artist => <a href={`${artist.id}/albums`} key={artist.id}><li >{ artist.name }</li></a>);

        return (
            <ul>
                { list }
            </ul>
        );
    }
}