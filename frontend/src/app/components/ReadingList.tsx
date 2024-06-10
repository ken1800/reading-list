'use client';

import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface ReadingListProps {
  books: Book[];
  onRemove: (title: string) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.title}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={book.coverPhotoURL}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.author}
                </Typography>
              </CardContent>
              <IconButton onClick={() => onRemove(book.title)}>
                <Delete />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReadingList;
