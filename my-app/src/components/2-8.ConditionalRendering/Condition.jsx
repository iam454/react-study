import React from "react";

function UserGreeting(props) {
  return (
    <>
      <h1>Hello! {props.name && props.name}</h1>
      <h2>
        You visited {props.count ? `${props.count} times.` : "first time!"}
      </h2>
    </>
  );
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="iam454" count={5} />;
  // }
  // return <GuestGreeting />;
  return props.isLoggedIn ? <UserGreeting count={2} /> : <GuestGreeting />;
}

export default function Condition() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
