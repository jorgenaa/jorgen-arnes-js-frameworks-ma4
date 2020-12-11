import React from 'react';

export default function Search({handleSearch}) {
    return (
      <div className="search-box">
          <input className="search-box__input search-box__input--active" 
                 type="text"  
                 placeholder="search by name..." 
                 onChange={event => handleSearch(event)} />
      </div>
    )
}


