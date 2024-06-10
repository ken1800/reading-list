'use client';

import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface SearchResultProps {
  book: Book;
  onAdd: (book: Book) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ book, onAdd }) => {
  return (
    <Card style={{ display: 'flex', marginBottom: '16px' }}>
      <CardMedia
        component="img"
        style={{ width: 100 }}
        image={book.coverPhotoURL}
        alt={book.title}
      />
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {book.author}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchResult;
