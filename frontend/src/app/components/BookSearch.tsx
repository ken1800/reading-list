'use client';

import { Autocomplete, TextField, Box } from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface BookSearchProps {
  books: Book[];
  onSearch: (searchTerm: string) => void;
  onAdd: (book: Book) => void;
}

const BookSearch: React.FC<BookSearchProps> = ({ books, onSearch, onAdd }) => {
  return (
    <Box my={2}>
      <Autocomplete
        options={books}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => (
          <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={option.coverPhotoURL}
              alt={option.title}
              width="40"
              height="40"
              style={{ marginRight: 8 }}
            />
            {option.title}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search for books by title"
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
        onChange={(event, value) => {
          if (value) {
            onAdd(value);
          }
        }}
        style={{ width: '100%' }}
      />
    </Box>
  );
};

export default BookSearch;
