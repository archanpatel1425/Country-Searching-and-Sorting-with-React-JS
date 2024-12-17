import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
const Sort_filter = ({ regionName, searchText, searchBy, hideviewmore }) => {
    const [CountryData, setCountryData] = useState([])

    useEffect(() => {
        const fatchData = async () => {
            const res = await axios.get('https://restcountries.com/v3.1/all', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setCountryData(res.data)
        }
        fatchData()
    }, [])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8'>
            {CountryData.filter((country) => {
                if (regionName) {
                    return country.region === regionName
                }
                else {
                    return true
                }
            }).filter((value) => (
                value.name.common.toLowerCase().includes(searchText.toLowerCase()) || value.region.toLowerCase().includes(searchText.toLowerCase()) || value.cca3.toLowerCase().includes(searchText.toLowerCase())
            )
            ).filter((value) => {
                if (searchBy === 'Independent') {
                    return value.independent === true
                } else if (searchBy === 'dependent') {
                    return value.independent === false
                }
                else {
                    return true
                }
            }).map((country, index) => (
                <div key={index} className='flex flex-col justify-center items-center bg-blue-100 rounded-xl'>
                    <CountryCard CountryData={CountryData} countryName={country.name.common} countryFlag={country.flag} countryRegion={country.region} countryCode={country.cca3} countryBorders={country.borders} hideviewmore={hideviewmore} searchText={searchText} />
                </div>
            ))}
        </div>
    )
}

export default Sort_filter
