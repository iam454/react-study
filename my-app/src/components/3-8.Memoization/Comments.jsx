import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

export default function Comments({ commentList }) {
  // 함수는 객체로 취급되기 때문에 렌더링할 때마다 새로운 함수가 생성되므로 메모이제이션이 불가능하다.
  // const handleClick = () => {
  //   console.log("눌림");
  // };

  // useCallback(함수, 의존성 배열)
  // 함수 자체를 메모제이션
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
