import React from 'react';
import ArtistsList from './ArtistsList';
import axios from 'axios';

export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: "",
            artistsList: undefined,
            err: undefined
        };
        
        this.submited = this.submited.bind(this);
        this.changed = this.changed.bind(this);
    }
    
    changed(event) {
        this.setState({
            search: event.target.value,
        });
    }
    
    submited(event) {
        let query = this.state.search;
        axios.get('https://api.spotify.com/v1/search', {
            params: {
              type: 'artist',
              q: query
            }
        }).then((response) => {
            this.setState({                
                artistsList: response.data.artists.items
            })
        }, (err) => {
            this.setState({
                err: 'Неверный запрос, '
            })

        });
        event.preventDefault();
    };
    
    render() {
        // const artists = this.state.err ? <div>{this.state.err}</div> : <ArtistsList artists={this.state.artistsList} />;
        let artists = <div></div>;
        
        if (this.state.err) {
            artists = <div>{this.state.err}</div>;
        } else if (this.state.artistsList) {
            artists = <ArtistsList artists={this.state.artistsList}/>;
        }

        return (
            <div>
                <form onSubmit={this.submited}>
                    <label>
                        Поиск:
                        <input type="text" name="artist" placeholder="Артист" onChange={this.changed}/>
                    </label>
                    <input type="submit" value={`Искать ${this.state.search}`} />
                </form>
                { artists }
            </div>
        );
    }
}