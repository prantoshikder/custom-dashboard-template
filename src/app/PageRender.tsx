"use client";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="page-loader">
          <h2>Loading ...</h2>
        </div>
      ) : (
        <>
          {children}

          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default PageRender;
