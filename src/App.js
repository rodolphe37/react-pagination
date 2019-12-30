import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';


class App extends React.Component {

    state = {
      users: null,
      total: null,
      per_page: null,
      current_page: 1
    }
  

  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  };


  makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application.json',
      },
    });

    const data = await response.json();

    this.setState({
      users: data.data,
      total: data.total,
      per_page: data.per_page,
      current_page: data.page,
    });
  };


  render() { console.dir(this.state.users)
    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      ));
    };

    const pageNumber = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumber.push(i);
      };

      renderPageNumbers = pageNumber.map(number => {
        let classes = this.state.current_page === number ? styles.active : '';

        if (number === 1 || number === this.state.total || (number >= this.state.current_page - 2 && number <= this.state.current_page + 2)) {

          return (
            <span key={number} className={classes} onClick= {() => this.makeHttpRequestWithPage(number)}>{number}</span>
          );
        }
      });
    };

    return (
      <div className={styles.app}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            { users}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
          {renderPageNumbers}
          <span onClick={() => this.makeHttpRequestWithPage(2)}>&raquo;</span>
        </div>
      </div>
    );
  }
}

export default App;
