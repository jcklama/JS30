import React, { RefObject } from 'react';
import { addCommasToNumber } from '../../utils/utils';
import { HighlightedLocation } from './HighlightedLocation';

export interface Props {}

export interface State {
    filteredData: City[]
}

export interface City {
    city: string;
    growth_from_2000_to_2013: string; 
    latitude: number;
    longitude: number;
    population: string;
    rank: string;
    state: string;
}

export default class TypeAhead extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.updateInfo = this.updateInfo.bind(this);
        this.state = {
            filteredData: []
        }
    }

    input: RefObject<HTMLInputElement> = React.createRef();
    url: string = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

    componentDidMount() {
        const searchBar: HTMLInputElement | null = this.input.current;
        if (searchBar) { searchBar.value = '' };
    }

    async updateInfo () {
        try {
            const response: Response = await fetch(this.url); // returns a Response object
            const data = await response.json(); // call json() to get json response
            const searchBar: HTMLInputElement | null = this.input.current;
            if (searchBar){
                const searchText: RegExp = new RegExp(searchBar.value, 'gi');
                const filteredData: City[] = data.filter((resp: City) => searchText.test(resp.city) || searchText.test(resp.state));
                this.setState({ filteredData }); // <-- very important for rendering changes onto the DOM
                console.log(this.state.filteredData);
            }
        }
        catch (err){
            console.error(err);
        }
    }

    render() {
        return <div className="typeahead">
            <div className="search-area">
                <input
                    className="typeahead-search"
                    ref={this.input}
                    onChange={this.updateInfo}
                />
                <div className="guide-text">Filter for a City Or a State</div>
            </div>      
            <ul className="typeahead-cities">
                {this.state.filteredData.map(city => 
                <li className="city" key={city.rank}>
                    <HighlightedLocation location={`${city.city}, ${city.state}`} searchVal={this.input.current?.value}/>
                    <span className="right">{addCommasToNumber(city.population)}</span>
                </li>)}
            </ul>
        </div>
    }
}