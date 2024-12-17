import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CountryCard from '../components/CountryCard'
const Country = () => {
    const { countryName } = useParams()
    const [CountryData, setCountryData] = useState([])
    useEffect(() => {
        const fatchData = async () => {
            const res =  await axios.get('https://restcountries.com/v3.1/all', {
                headers: {
                    'Content-Type': 'application/json',
                },
                httpAgent: agent,
            })
            setCountryData(res.data)
        }
        fatchData()
    }, [])

    return (
        <div>
            <div className='w-full flex justify-center items-center text-5xl font-bold'>{countryName}</div>
            {CountryData.filter((country, index) => country.name.common == countryName).map((country, index) => (
                <div key={index}>
                    <CountryCard CountryData={CountryData} countryName={country.name.common} countryFlag={country.flag} countryRegion={country.region} countryCode={country.cca3} countryBorders={country.borders} hideviewmore={true} />
                </div>
            ))}
        </div>
    )
}

export default Country
