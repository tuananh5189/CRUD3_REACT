// Các component của thư viện chakra-ui
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
// useState:Hook của reactjs
import { useState } from 'react';
/**
 * useAppDispatch:Hook của react-redux dùng để tiến hành dispatch(phát đi) một action để tiến hành tahy đổi state
 * useAppSelector:Hook của react-redux dùng để tiến hành lấy ra state tương ứng
 */
import { useAppDispatch, useAppSelector } from '../hooks';
import { addNewBook, updateBook } from '../redux/bookSlice';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useHistory } from 'react-router-dom';

/**
 * AddBook:Function component xử lý việc thêm hay cập nhật book
 * @returns 
 */
const AddBook = () => {
  // Lấy ra id trên url của trình duyệt
  const { id } = useParams<{ id: string }>();
  // history:Lấy ra để tiến hành điều hướng link web
  const history = useHistory();
  // useAppDispatch:Hàm dispatch của redux,dùng để tiến hành gọi 1 action bất kỳ
  const dispatch = useAppDispatch();

  // useAppSelector:Hàm selector của redux,dùng để tiến hành lấy ra state
  const book = useAppSelector((state) =>
    state.book.bookList.find((book) => book.id === id)
  );
  // setTitle:Cập nhật state title
  const [title, setTitle] = useState<string | undefined>(book?.title || '');
  // setAuthor:Cập nhật state author
  const [author, setAuthor] = useState<string | undefined>(book?.author || '');

  // Tiến hành thêm hoặc cập nhật Book
  const handleOnSubmit = () => {
    // Tiến hành cập nhật Book
    if (id) {
      editBook();
      return;
    }
    // Tiến hành thêm mới Book
    dispatch(addNewBook({ author, title, id: uuidv4() }));
    // Tiến hành clear input
    clearInputs();
  };

  // Tiến hành cập nhật Book
  const editBook = () => {
    // Tiến hành dispatch 1 action để tiến hành cập nhật Book
    dispatch(updateBook({ author, title, id }));
    clearInputs();
    // Tiến hành điều hướng về danh sách list book
    history.push('/');
  };

  // Hàm clear input
  const clearInputs = () => {
    setTitle('');
    setAuthor('');
  };

  // Render ra view UI thêm hoặc update Book
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="50%">
        <Box
          d="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <Heading color="white">Add Book</Heading>
        </Box>
        <FormControl isRequired>
          <FormLabel color="white">Title</FormLabel>
          <Input
            value={title}
            color="white"
            placeholder="The Lord of the Rings"
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <FormLabel color="white" marginTop={4}>
            Author
          </FormLabel>
          <Input
            value={author}
            color="white"
            placeholder="J.R.R Tolkien"
            onChange={(e) => setAuthor(e.currentTarget.value)}
          />
        </FormControl>
        <Button
          marginTop={4}
          colorScheme="teal"
          type="submit"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default AddBook;
