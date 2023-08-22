/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Image from "next/image";
import image from "../../../../public/page-not-found.gif";

const PageNotFound = () => {
  return (
    <div
      css={customStyles}
      className="page-not-found flex content-center items-center"
    >
      <div className="content-wrapper">
        <div>
          <Image src={image} alt="" height={600} />
        </div>
      </div>
    </div>
  );
};

const customStyles = css``;

export default PageNotFound;
