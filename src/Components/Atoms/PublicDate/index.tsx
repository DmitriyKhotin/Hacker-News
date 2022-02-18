import React, { FC } from 'react';

import { UnixTime } from '../../../store/slice/types';

const PublicDate: FC<{ time: UnixTime }> = ({ time }) => {
  return <p>{new Date(time * 1000).toLocaleString()}</p>;
};

export default PublicDate;
