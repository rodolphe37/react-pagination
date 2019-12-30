import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: null,
      total: null,
      per_page: null,
      current_page: null
    }
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
      current_page: data.current_page,
    });
  };


  render() { console.dir(this.state.users)
    let users;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      ));
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
          <span onClick={() => this.makeHttpRequestWithPage(1)}>1</span>
          <span onClick={() => this.makeHttpRequestWithPage(2)}>2</span>
          <span onClick={() => this.makeHttpRequestWithPage(3)}>3</span>
          <span onClick={() => this.makeHttpRequestWithPage(4)}>4</span>
          {/* <span>&laquo;</span>
          <span className={styles.active}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span> */}
        </div>
      </div>
    );
  }
}

export default App;
