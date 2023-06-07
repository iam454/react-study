import React, { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  // componentDidMount와 유사
  useEffect(() => {
    const intrervalId = setInterval(() => tick(), 1000);

    // componentWillUnmount와 유사
    return () => {
      clearInterval(intrervalId);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  // render와 유사
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
