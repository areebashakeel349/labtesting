import React from 'react';

const ListComponent = () => {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} data-testid={`item-${item}`}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
