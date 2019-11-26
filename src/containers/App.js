import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, retrieveRobots } from '../actions';

const mapStateToProps = (state) => {
    return  { 
        searchField: state.searchRobots.searchField,
        robots: state.retrieveRobots.robots,
        error: state.retrieveRobots.error,
        isPending: state.retrieveRobots.isPending,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRetrieveRobots: () => dispatch(retrieveRobots())
    };
}
class App extends React.Component {
    
    componentDidMount() {
        this.props.onRetrieveRobots();
    }
    render() {
        const { robots, isPending } = this.props;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !isPending ? (
            <div className="tc">
            <h1 className="f1">Robots</h1>
            <SearchBox searchChange={onSearchChange}/>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </div>
        ) : <h1 className="tc f1">LOADING</h1>;
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);