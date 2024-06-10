'use client';

import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Container } from '@mui/material';
import BookSearch from './components/BookSearch';
import ReadingList from './components/ReadingList';
import client from './apollo-client';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const IndexPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, { client });
  const [_, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState<Book[]>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const addBook = (book: Book) => {
    setReadingList([...readingList, book]);
  };

  const removeBook = (title: string) => {
    setReadingList(readingList.filter((book) => book.title !== title));
  };

  return (
    <Container>
      <BookSearch books={data.books} onSearch={setSearchTerm} onAdd={addBook} />
      <ReadingList books={readingList} onRemove={removeBook} />
    </Container>
  );
};

export default IndexPage;
