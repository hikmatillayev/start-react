import { Component, useState } from 'react'
import './app.css'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { v4 as uuidv4 } from 'uuid';

const App=()=>{
    const [data, setData]=useState(
        [
            { name: 'Empire of osman', viewers: 567, favourite: false, like: false, id: 1 },
            { name: 'Ertugrul', viewers: 789, favourite: false, like: false, id: 2 },
            { name: 'Omar', viewers: 1202, favourite: false, like: false, id: 3 },
        ])
        // const [term, setTerm]=useState('')
        const [filter, setFilter]=useState('')
}

class App extends Component {

    onDelete = id => {
        this.setState(({ data }) => {
            const newArr = data.filter(c => c.id !== id)

            return {
                data: newArr,
            }
        })
    }

    addForm = item => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, favourite: !item.favourite }
                }
                return item
            }),
        }))
        console.log(id);
    }

    render() {
        const { data } = this.state
        const allMoviesCount = data.length
        const favouriteMovieCount = data.filter(c => c.favourite).length
        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
                    <div className='search-panel'>
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList onToggleProp={this.onToggleProp} data={data} onDelete={this.onDelete} />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        )
    }
}

export default App