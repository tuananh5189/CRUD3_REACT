import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';

import { useAppDispatch } from '../hooks';
// action tiến hành delete book
import { deleteBook } from '../redux/bookSlice';
import { useHistory } from 'react-router-dom';

const BookInfo = ({
  title,
  author,
  id,
  ...rest
}: {
  // Đây là định nghĩa kiểu dữ liệu của Book
  title: string | undefined;
  author: string | undefined;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  // Khi tiến hành click vào nut edit book sẽ điều hướng sang component "update book"
  const redirect = (id: string) => {
    history.push(`/update-book/${id}`);
  };

  return (
    <Box
      p={5}
      justifyContent="space-between"
      d="flex"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Box d="flex" flexDirection="column">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{author}</Text>
      </Box>
      <Box>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          //Khi tiến hành click vào nut delete book sẽ tiến hành xóa book
          onClick={() => dispatch(deleteBook({ id }))}
        />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          // Khi tiến hành click vào nut edit book sẽ điều hướng sang component "update book"
          onClick={() => redirect(id)}
        />
      </Box>
    </Box>
  );
};

export default BookInfo;
