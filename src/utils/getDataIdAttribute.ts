import { MouseEvent } from 'react';

import { Id } from '../store/slice/types';

interface HTMLElementWithDatasetAndParentNode extends HTMLDivElement {
  dataset: {
    id: string;
  };
  parentNode: HTMLElementWithDatasetAndParentNode;
}

export const getIdByDataAttribute = (event: MouseEvent<HTMLDivElement>): Id => {
  let elem = event.target as HTMLElementWithDatasetAndParentNode;
  let counter = 0;

  while (elem) {
    if (elem.dataset.id) {
      return Number(elem.dataset.id);
    } else {
      elem = elem.parentNode;
    }

    counter = counter + 1;
    if (counter > 100) {
      throw new Error('Зациклилось');
    }
  }
};
