import React from "react";

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );

  const todos = [
    {
      id: 1,
      text: "물 마시기",
    },
    {
      id: 2,
      text: "리액트 공부하기",
    },
    {
      id: 3,
      text: "기말고사 공부하기",
    },
    {
      id: 4,
      text: "과제하기",
    },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
