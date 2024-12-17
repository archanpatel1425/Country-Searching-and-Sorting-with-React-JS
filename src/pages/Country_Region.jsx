import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Country_Region = () => {
    const navigate = useNavigate()
    const [regions, setRegions] = useState([])

    useEffect(() => {
        const fatchData = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all', {
                    method: 'GET',
                });
                const data = await res.json();
                const uniqueRegions = [...new Set(data.map((value) => value.region))];
                console.log(uniqueRegions)
                setRegions(uniqueRegions);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        fatchData()
    }, [])

    const handleRegionClick = (regionName) => {
        navigate(`/region/${regionName}`)
    }

    return (
        <div>
            <div className='w-full flex justify-center items-center text-5xl font-bold'>Country region</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 '>
                {regions.map((region, index) => (
                    <span key={index} className='cursor-pointer w-8' onClick={() => handleRegionClick(region)}>{region}</span>
                ))}
            </div>
        </div>
    )
}

export default Country_Region
