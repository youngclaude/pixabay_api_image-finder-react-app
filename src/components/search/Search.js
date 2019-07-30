import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../image-results/ImageResults';
import axios from 'axios';



class Search extends Component {
    state = {
        searchText: '',
        amount: '15',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '13170803-16ca6faf8adf38e17fd128b3f',
        images: []
    }

    onChange = (e) => {
        this.setState({ searchText: e.target.value });

        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`)
            //.then(results => console.log(results)) -- Proved a successful response
            .then(results => this.setState({images: results.data.hits}))
            .catch(error => console.log(error))
    }

    onAmountChange = (e, index, value) =>{
        this.setState({ amount: value})
    }

    render(){
        // console.log(this.state.images); Test to track the value of images Array as the page re-renders
        return(
          <div>
            <TextField
                name="searchText"
                value={this.state.searchText}
                onChange={this.onChange}
                floatingLabelText="Search For Images..."
                fullWidth={true}
            />

            <SelectField
                name="amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                floatingLabelText="Amount (5- 50)"
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={25} primaryText="25" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>

              <ImageResults Images={this.state.images}/>

          </div>
        );
    }
}

export default Search;