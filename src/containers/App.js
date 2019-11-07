import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchString: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchString: event.target.value });
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(
            users => this.setState({ robots: users })
        )
    }
    render() {
        const { robots, searchString } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchString.toLowerCase());
        });
        return robots.length ? (
            <div className="tc">
            <h1 className="f1">Robots</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </div>
        ) : <h1 className="tc f1">LOADING</h1>;
    }

}
export default App;