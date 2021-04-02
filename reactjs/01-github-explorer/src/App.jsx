import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';
export function App() {
    // throw new Error('Eita Giovana, o forninho caiu!')
    // return <h1>Hello Word Ignite...</h1>
    return ( 
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}
