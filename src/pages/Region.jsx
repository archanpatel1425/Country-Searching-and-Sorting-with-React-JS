import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Sort_filter from '../components/Sort_filter'

const Region = () => {
    const { regionName } = useParams()
    const [searchText, setSearchText] = useState('')
    const [searchBy, setSearchBy] = useState('All')

    useEffect(() => {
        const fatchData = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all')
            setCountryData(res.data)
        }
        fatchData()
    }, [])

    const handleChildData = (data) => {
        setSearchText(data.searchText)
        setSearchBy(data.searchBy)
    };

    return (
        <div>
            <Header onChildDataChange={handleChildData} />
            <Sort_filter regionName={regionName} searchText={searchText} searchBy={searchBy} hideviewmore={false} />
        </div>
    )
}

export default Region
