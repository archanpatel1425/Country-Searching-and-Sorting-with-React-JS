import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import https from 'https';

const Country_Region = () => {
    const navigate = useNavigate()
    const [regions, setRegions] = useState([])
        const agent = new https.Agent({
            keepAlive: true,  // Enables persistent connections
            protocol: 'http:', // Forces HTTP/1.1 instead of HTTP/2
        });
    useEffect(() => {
        const fatchData = async () => {
            const res =  await axios.get('https://restcountries.com/v3.1/all', {
                headers: {
                    'Content-Type': 'application/json',
                }, httpsAgent: agent,
            })
            const uniqueRegions = [...new Set(res.data.map((value) => value.region))];
            console.log(uniqueRegions)
            setRegions(uniqueRegions);
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
