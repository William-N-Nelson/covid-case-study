import React, {useState,useEffect} from 'react'


const Search = () => {
    const [data,setData] = useState([])
    const getdata = ()=>{
        fetch("/api/v1/records").then(response => {return response.json()})
        .then(response => setData(response))

    }
    useEffect(() => {getdata()},[])
    return (
        <div>
        This is the Searchpage. 
        {data.map(e => {
            return(
            <div>
            {e.entityName}
            </div>
            )
        })}
        </div>
    )
}

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Franchise Taxpayer Data from January 2020</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="FTD Jan 2020"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default Search && SearchBar;
