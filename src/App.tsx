import React from 'react';
import ReactDOM from 'react-dom/client';

import { TagsEditor } from './TagsEditor';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <TagsEditor articleId="1" />
    </>
  );
}
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
