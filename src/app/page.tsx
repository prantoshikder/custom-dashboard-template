/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";

import Authentication from "@/components/Authentication";

export default function Home() {
  return (
    <div css={HomeStyles} className="home-container">
      <Authentication />
    </div>
  );
}

const HomeStyles = css`
  &.home-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001529;
    color: #fff;
  }
`;
