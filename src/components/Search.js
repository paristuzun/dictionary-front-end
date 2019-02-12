import React from 'react'

const Search = (props) => {
  return (
    <form id="search-form" role="search">
      <input id="search-textbox" max-length="145" autoCapitalize="off" autoCorrect="off"
      className="ui-autocomplete-input" autoComplete="off"
        type="text"
        onChange={props.handleChange}
        value={props.searchTerm}
        placeholder={"Topic, #entry or @writer "}
      />
      <span className="spin">↻</span>
      <button type="submit">
    <svg className="eksico">
      <use href="#eksico-search"></use>
    </svg>
  </button>
  
    </form>
  )
}

export default Search
