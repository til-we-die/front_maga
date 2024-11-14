import Navbar from './components/Navbar';
import useRoutes from './rout/routes';
import './App.css';

function App() {
    const routes = useRoutes()

    return (
        <div className={'app'}>
            <Navbar />
            {routes}
        </div>
    )
}
export default App;
