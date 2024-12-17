import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../components/CountryCard';


const Country = () => {
    const { countryName } = useParams()
    const [CountryData, setCountryData] = useState([])
    useEffect(() => {
        const fatchData = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all', {
                    method: 'GET',
                });
                const data = await res.json();
                setCountryData(data)
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
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
