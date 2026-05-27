import routes from './routes';
import { useRoutes } from 'react-router';

import './styles/reset.css'
import './styles/utilities.css'
import './styles/Variables.css'
import './styles/font.css'
import './App.css';

export default function App() {
    const router = useRoutes(routes);
    return <>{router}</>;
}
