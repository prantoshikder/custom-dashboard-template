import { FC, ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
