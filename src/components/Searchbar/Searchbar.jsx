import { useState } from 'react';
import {
  SearchHeader,
  SearchForm,
  Button,
  Input,
  Label,
} from './Searchbar.styled';

import { FiSearch } from 'react-icons/fi';

const Searchbar = ({ onSubmit }) => {
  const [querySearch, setQuerySearch] = useState('');

  const handleChange = e => {
    setQuerySearch(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(querySearch);
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <Label>
            <FiSearch value={{ style: { width: 50, height: 50 } }} />
          </Label>
        </Button>

        <Input
          type="text"
          autocomplete="off"
          value={querySearch}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </SearchHeader>
  );
};

export default Searchbar;
