import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { items, sellers } from './data.js';

let renderRoot = () => {
  return (
    <div>
      Welcome to this page. Click here to view all the items:
      <Link to="/allItems">All items</Link>
    </div>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 1px 3px 1px #ddd;
  border-radius: 5px;

  & > img {
    max-width: 100px;
  }
`;

const ItemLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: #2196f3;
`;

let renderAllItems = () => {
  return (
    <div>
      {items.map((item) => (
        <LinkWrapper key={item.itemId}>
          <img src={item.img} />
          <ItemLink to={`/item/${item.itemId}`}>{item.description}</ItemLink>
        </LinkWrapper>
      ))}
    </div>
  );
};

const renderItem = (routerData) => {
  const itemId = routerData.match.params.itemId;
  const item = items.find((item) => item.itemId === itemId);
  if (!item) return <div> Unknown item </div>;

  return (
    <div>
      {item.description}. Only {item.inventory} remaining <img src={item.img} />
      <p>Price: {item.price}</p>
      <Link to={`/seller/${item.sellerId}`}>Go to seller</Link>
    </div>
  );
};

const renderSeller = (routerData) => {
  const sellerId = routerData.match.params.sellerId;
  const seller = sellers.find((seller) => seller.sellerId === Number(sellerId));
  return (
    <div>
      <h1>I am {seller.name}</h1>
      <ul>
        {items
          .filter((item) => item.sellerId === Number(sellerId))
          .map((item) => {
            return (
              <li>
                <Link to={`/item/${item.itemId}`}>{item.description}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderRoot} />
          <Route exact={true} path="/allItems" render={renderAllItems} />

          <Route exact={true} path="/item/:itemId" render={renderItem} />

          <Route exact={true} path="/seller/:sellerId" render={renderSeller} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
