import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../API/postApi';
import Loader from "../components/UI/Loader.jsx";
import CountryCard from '../components/Layout/CountryCard.jsx';
import SearchFilter from '../components/UI/SearchFilter.jsx';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");
  

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // getCountryData();
      setCountries(res.data)
    })
  }, [])

  if (isPending) { return <h1><Loader /></h1> }

  return (
    <section className='country-section'>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter} />

      <ul className='grid grid-four-cols'>
        {
          countries.map((curCountry, index) => {
            return (
              <CountryCard country={curCountry} key={index} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default Country