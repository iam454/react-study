import React from "react";
/** @jsxImportSource @emotion/react */
import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const color = "white";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

// 스타일 우선순위
const P = (props) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);
const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

// &
const paragraph = css`
  color: turquoise;

  header & {
    color: green;
  }
`;

// 애니메이션
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export default function EmotionExample() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>This my button component.</Button>
      <br />
      <P>PPPPPPPP</P>
      <ArticleText>ARTICLE TEXT</ArticleText>
      <br />
      {/* fallbacks */}
      {/* gradient를 지원하는 브라우저는 gradient를 보여주지만, 지원하지 않는 브라우저에 대해서는 red를 보여준다. */}
      <div
        css={{
          background: ["red", "linear-gradient(#e66465, #9198e5)"],
          height: 100,
        }}
      >
        This has a gradient background in browsers that support gradients and is
        red in browsers that don't support gradients
      </div>
      <br />
      <div>
        <header>
          <p css={paragraph}>This is green since it's inside a header</p>
        </header>
        <p css={paragraph}>This is turquoise since it's not inside a header.</p>
      </div>
      <br />
      {/* media query */}
      <p
        css={css`
          font-size: 30px;
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        Some text!
      </p>
      <br />
      {/* global */}
      <div>
        <Global
          styles={css`
            .some-class {
              color: hotpink !important;
            }
          `}
        />
        <Global
          styles={{
            ".some-class": {
              fontSize: 50,
              textAlign: "center",
            },
          }}
        />
        <div className="some-class">This is hotpink now!</div>
      </div>
      <br />
      {/* animation */}
      <div
        css={css`
          animation: ${bounce} 1s ease infinite;
        `}
      >
        some bouncing text!
      </div>
    </>
  );
}
