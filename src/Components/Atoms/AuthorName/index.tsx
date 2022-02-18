import React, { FC } from 'react';

const AuthorName: FC<{ name: string }> = ({ name }) => {
  return <p>by {name}</p>;
};

export default AuthorName;
