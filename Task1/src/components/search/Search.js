import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    orientation: '',
    category: '',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '49706897-7407e5261cb5232cc8049bf68',
    images: [],
    history: JSON.parse(localStorage.getItem('searchHistory')) || []
  };

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAmountChange = (e, index, value) => {
    this.setState({ amount: value });
  };

  fetchImages = () => {
    const { searchText, apiUrl, apiKey, amount, orientation, category, history } = this.state;

    if (searchText.trim() === '') {
      this.setState({ images: [] });
      return;
    }

    let url = `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;
    if (orientation) url += `&orientation=${orientation}`;
    if (category) url += `&category=${category}`;

    axios
      .get(url)
      .then((res) => {
        const updatedHistory = [searchText, ...history.filter(h => h !== searchText)].slice(0, 5);
        this.setState({
          images: res.data.hits,
          history: updatedHistory
        });
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { searchText, amount, orientation, category, images, history } = this.state;

    return (
      <div style={{ maxWidth: '800vh', margin: 'auto', padding: '20px' }}>
        <TextField
          name="searchText"
          value={searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth
        />
        <br />

        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>

        <br />

        <SelectField
          floatingLabelText="Orientation"
          value={orientation}
          onChange={(e, i, value) => this.setState({ orientation: value })}
        >
          <MenuItem value="" primaryText="All" />
          <MenuItem value="horizontal" primaryText="Horizontal" />
          <MenuItem value="vertical" primaryText="Vertical" />
          <MenuItem value="square" primaryText="Square" />
          
        </SelectField>

        <br />

        <SelectField
          floatingLabelText="Category"
          value={category}
          onChange={(e, i, value) => this.setState({ category: value })}
        >
          <MenuItem value="" primaryText="All" />
          <MenuItem value="fashion" primaryText="Fashion" />
          <MenuItem value="nature" primaryText="Nature" />
          <MenuItem value="backgrounds" primaryText="Backgrounds" />
          <MenuItem value="science" primaryText="Science" />
          <MenuItem value="education" primaryText="Education" />
          <MenuItem value="people" primaryText="People" />
          <MenuItem value="feelings" primaryText="Feelings" />
          <MenuItem value="animals" primaryText="Animals" />
          <MenuItem value="food" primaryText="Food" />
          <MenuItem value="health" primaryText="Health" />
          <MenuItem value="places" primaryText="Places" />
          <MenuItem value="industry" primaryText="Industry" />
          <MenuItem value="computer" primaryText="Computer" />
          <MenuItem value="sports" primaryText="Sports" />
          <MenuItem value="transportation" primaryText="Transportation" />
          <MenuItem value="travel" primaryText="Travel" />
          <MenuItem value="buildings" primaryText="Buildings" />
          <MenuItem value="business" primaryText="Business" />
          <MenuItem value="music" primaryText="Music" />
          
        </SelectField>

        <br />

        <RaisedButton
          label="Search"
          primary
          onClick={this.fetchImages}
          style={{ marginTop: '15px' }}
        />

        {history.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <p><strong>Search History:</strong></p>
            {history.map((term, idx) => (
              <RaisedButton
                key={idx}
                label={term}
                onClick={() => this.setState({ searchText: term }, this.fetchImages)}
                style={{ margin: '5px 5px 0 0' }}
              />
            ))}
          </div>
        )}

        <br />

        {images.length > 0 && <ImageResults images={images} />}
      </div>
    );
  }
}

export default Search;
