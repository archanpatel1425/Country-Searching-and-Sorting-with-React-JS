import React, { useEffect, useState } from 'react'

const Header = ({ onChildDataChange }) => {
    const [searchText, setSearchText] = useState('')
    const [searchBy, setSearchBy] = useState('All')
    useEffect(() => {
    onChildDataChange({ searchText, searchBy });
        
    },[searchText,searchBy])
    return (
        <div>
            <header>
                <label htmlFor="">Search : </label>
                <input type="search" className='border-2 border-black m-4 ' onChange={(e) => setSearchText(e.target.value)} />
                <label htmlFor="">Search by </label>
                <select name="" id="" onChange={(e) => setSearchBy(e.target.value)} className='border-2 border-black m-4 '>
                    <option value="All">All</option>
                    <option value="Independent">Independent</option>
                    <option value="dependent">dependent</option>
                </select>
            </header>
        </div>
    )
}

export default Header
