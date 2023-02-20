import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import PageContainer from './Containers/PageContainer';
import './index.css';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <PageContainer />
  </BrowserRouter>
);
