import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Sort_filter from '../components/Sort_filter'

const HomePage = () => {
    const [CountryData, setCountryData] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchBy, setSearchBy] = useState('All')

    const handleChildData = (data) => {
        setSearchText(data.searchText)
        setSearchBy(data.searchBy)
    };

    useEffect(() => {
    }, [CountryData])

    return (
        <div>
            <Header onChildDataChange={handleChildData} />
            <div className='text-blue-500 underline underline-offset-auto'><Link to='/country-region'>Region</Link></div>
            <Sort_filter searchText={searchText} searchBy={searchBy} hideviewmore={false} />
        </div>
    )
}

export default HomePage
