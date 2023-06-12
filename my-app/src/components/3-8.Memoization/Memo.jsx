import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "comment1", content: "message1", likes: 2 },
  { title: "comment2", content: "message2", likes: 2 },
  { title: "comment3", content: "message3", likes: 2 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setComments((prevComments) => [
          ...prevComments,
          {
            title: `comment${prevComments.length + 1}`,
            content: `message${prevComments.length + 1}`,
            likes: 2,
          },
        ]),
      5000
    );

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <Comments commentList={comments} />;
}
