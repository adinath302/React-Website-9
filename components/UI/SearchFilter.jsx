import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
    
    const handleInputEvent = (event) => {
        setSearch(event.target.value);
    }

    const HandleSelectChange = (event) => {
       
    }
    return (
        <section className='section-searchFilter container'>

            <input
                type="text"
                placeholder='search'
                value={search} // it will get the value from the input field to the variable search
                onChange={handleInputEvent} />

            <div> // it will get the value from the select field to the variable filter and set the value of filter to the selected value
                <select className='select-section' value={filter} onChange={HandleSelectChange}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </section>
    )
}

export default SearchFilter