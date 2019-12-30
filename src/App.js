import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

function App() {
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
          <tr>
            <td>1</td>
            <td>firstName1</td>
            <td>firstName1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>firstName2</td>
            <td>lastName2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>firstName3</td>
            <td>firstName3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>firstName4</td>
            <td>firstName4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>firstName5</td>
            <td>firstName5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>firstName6</td>
            <td>lastName6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>firstName7</td>
            <td>firstName7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>firstName8</td>
            <td>firstName8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>firstName9</td>
            <td>firstName9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>firstName10</td>
            <td>firstName10</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.pagination}>
        <span>&laquo;</span>
        <span className={styles.active}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </div>
  );
}

export default App;
