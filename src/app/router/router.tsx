import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import { Main } from '@pages/main';

export const Router = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
