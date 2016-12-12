import React from 'react';
import ArtistsList from './ArtistsList';
import axios from 'axios';

export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: '',
            artistsList: undefined,
            err: undefined
        };
        
        this.submited = this.submited.bind(this);
        this.changed = this.changed.bind(this);
    }
    
    changed(event) {
        this.setState({
            search: event.target.value,
            err: undefined
        });
    }
    
    submited(event) {
        let query = this.state.search;

        if (query.length === 0) {
            this.setState({
                err: 'Пустое поле поиска'
            });
        } else {
            axios.get('https://api.spotify.com/v1/search', {
                params: {
                type: 'artist',
                q: query
                }
            }).then((response) => {
                if (response.data.artists.items.length === 0) {
                    this.setState({
                        artistsList: undefined,
                        err: 'Ничего не найдено'
                    });
                } else {
                    this.setState({                
                        artistsList: response.data.artists.items,
                        err: undefined
                    });
                }
            }, (err) => {
                if (err.status === 400) {
                    this.setState({
                        artistsList: undefined,
                        err: 'Неверный запрос'
                    })
                }
            });
        }
        event.preventDefault();
    };
    
    render() {
        let artists = <div></div>;
        
        if (this.state.err) {
            artists = <div className="error">{this.state.err}</div>;
        } else if (this.state.artistsList) {
            artists = <ArtistsList artists={this.state.artistsList}/>;
        }

        return (
            <div>
                <form onSubmit={this.submited} className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="search" className="col-sm-2 control-label">Найти</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="search" placeholder="Артист" onChange={this.changed}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">{`Искать ${this.state.search}`}</button>
                        </div>
                    </div>
                </form>
                { artists }
            </div>
        );
    }
}