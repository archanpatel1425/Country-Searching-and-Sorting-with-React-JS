import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({
    CountryData,
    countryName,
    countryFlag,
    countryRegion,
    countryCode,
    countryBorders,
    hideviewmore,
    searchText,
}) => {
    const navigate = useNavigate();

    // Function to highlight matching text
    const highlightText = (text, search) => {
        if (!search) return text; // If no search, return original text
        const regex = new RegExp(`(${search})`, 'gi'); // Match search case-insensitively
        return text.replace(regex, `<span style="background-color: yellow; font-weight: bold;">$1</span>`);
    };

    const handleClick = (countryCode) => {
        const country_detail = CountryData.filter((value) => value.cca3 === countryCode);
        const country_name = country_detail[0].name.common;
        navigate(`/country/${country_name}`);
    };

    const handleClickViewMore = (country_name) => {
        navigate(`/country/${country_name}`);
    };

    return (
        <div className='flex flex-col justify-center items-center h-48'>
            <div dangerouslySetInnerHTML={{ __html: `Country name: ${highlightText(countryName, searchText)}` }} />
            <div dangerouslySetInnerHTML={{ __html: `Country flag: ${highlightText(countryFlag, searchText)}` }} />
            <div dangerouslySetInnerHTML={{ __html: `Country region: ${highlightText(countryRegion, searchText)}` }} />
            <div dangerouslySetInnerHTML={{ __html: `Country code: ${highlightText(countryCode, searchText)}` }} />

            {countryBorders && (
                <div>
                    <span>Country borders: </span>
                    {countryBorders.map((border, index) => (
                        <span key={index}>
                            <span
                                className='cursor-pointer hover:bg-blue-400'
                                onClick={() => handleClick(border)}
                                dangerouslySetInnerHTML={{ __html: highlightText(border, searchText) }}
                            ></span>
                            ,
                        </span>
                    ))}
                </div>
            )}
            {!hideviewmore && (
                <button
                    className='flex justify-center items-center h-8 w-24 rounded-md cursor-pointer bg-blue-500 mt-4'
                    onClick={() => handleClickViewMore(countryName)}
                >
                    View more
                </button>
            )}
        </div>
    );
};

export default CountryCard;
