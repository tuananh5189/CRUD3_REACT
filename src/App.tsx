import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
/**
 * App.tsx trong dự án này định nghĩa danh sách route của dự án
 * Route=>Đang sử dụng thư viện react-router-dom để thiết lập định tuyến(Link) cho dự án
 * BookList:Là component xử lý hiển thị danh sách Book
 * AddBook: component xử lý chung việc thêm và update Book tùy theo tham số id tương ứng
 * Khi click vào link "add-new-book" => Sẽ đến màn xử lý thêm book
 * Khi click vào link "update-book/:id" => Sẽ đến màn xử lý update book
 * @returns 
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={BookList} />
        <Route path="/add-new-book" component={AddBook} />
        <Route path="/update-book/:id" component={AddBook} />
      </Switch>
    </Router>
  );
}

export default App;
