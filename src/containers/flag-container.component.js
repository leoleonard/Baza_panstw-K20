import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries()); // pobranie informacji o panstwach
        this.props.dispatch(searchCountries('')); // wyswietla wszystkie kraje gdy string jest pusty
    }


    search(event) {
       this.props.dispatch(searchCountries(event.target.value)); // event.. - ostatnia wpisana fraza
    }

    deleteCountry(id) {
      this.props.dispatch(deleteCountry(id));
        }

    render() {
        return (
            <div>
              <div className="search text-center">
                  <input type="text" onChange={this.search.bind(this)}/>
              </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)}  />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);
