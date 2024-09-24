import React, { PropsWithChildren } from "react";

interface ITableBodyProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Table: React.FC<ITableBodyProps> = ({ children }) => {
  return <table className="w-full min-w-[640px] table-auto">{children}</table>;
};
