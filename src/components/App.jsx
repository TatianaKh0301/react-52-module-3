import { Component } from 'react';
import axios from 'axios';
import Select from 'react-select'


axios.default.baseURL = 'https://api.thedogapi.com/v1';
axios.default.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export class App extends Component {
    render() {
        return (
            <>
              <Select options={options} />
            </>
        );
  } 
};
