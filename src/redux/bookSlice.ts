import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { BookState } from '../types';
/**
 * 1.Tham khảo mô hình redux:
 * https://viblo.asia/p/hoc-react-redux-trong-15-phut-1Je5E7q0ZnL
 * Mô hình hoạt động của redux:
 * View UI => Click 1 chức năng như thêm hoặc update book sẽ dispatch đến 1 action tương ứng => sau đó sẽ gọi đến reducers để tiến hành update lại state
 * 
 * 2.Thư viện reduxjs/toolkit
 * Đây là thư viện giúp làm việc với redux đơn giản,gọn gàng hơn thư viện redux
 * Tham khảo:
 * https://redux-toolkit.js.org/tutorials/quick-start
 */


// initialStateType : Khai báo kiểu dữ liệu typescript
type initialStateType = {
  bookList: BookState[];
};

// Khai báo dữ liệu bookList mặc định
const bookList: BookState[] = [
  {
    id: uuidv4(),
    title: '1984',
    author: 'George Orwell',
  },
  {
    id: uuidv4(),
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J.R.R Tolkien',
  },
];

/**
 * initialState: Khởi tạo state bookList mặc định
 * initialStateType: Gán kiểu dữ liệu typescript cho biến initialState
 */
const initialState: initialStateType = {
  bookList,
};

/**
 * createSlice:Hàm của thư viện redux-toolkit,giúp tạo nhanh các action và reducers 
 */
export const bookSlice = createSlice({
  name: 'book',//book là tên chung chứa các state của book
  initialState,//Giá trị khởi tạo mặc định
  reducers: {
    // addNewBook:Xử lý state bookList khi thêm book
    addNewBook: (state, action: PayloadAction<BookState>) => {
      state.bookList.push(action.payload);
    },
    // updateBook:Xử lý state bookList khi update book
    updateBook: (state, action: PayloadAction<BookState>) => {
      const {
        payload: { title, id, author },
      } = action;

      state.bookList = state.bookList.map((book) =>
        book.id === id ? { ...book, author, title } : book
      );
    },
    // deleteBook:Xử lý state bookList khi delete book
    deleteBook: (state, action: PayloadAction<{ id: string }>) => {
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload.id
      );
    },
  },
});
// export ra các actions thao tác với Book(Thêm,sửa,xóa Book) để xử dụng bên phía view component
export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;

// selectBookList:Hàm để lấy ra state chứa danh sách bookList
export const selectBookList = (state: RootState) => state.book.bookList;

export default bookSlice.reducer;
