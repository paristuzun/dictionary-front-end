import React from 'react'

const Search = (props) => {
  return (
    <div className="ui search fluid">
      <div className="ui icon input">
      <input
        type="text"
        onChange={props.handleChange}
        value={props.searchTerm}
        placeholder={"Search topic, entry or writer "}
      />
      <i className="circular search link icon"></i>
      </div>
    </div>
  )
}

export default Search
