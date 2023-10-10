import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onRatingChange,
    onCategoryChange,
    onSearchChange,
    onFilterClear,
    search,
    onEnterSearch,
  } = props

  const clickCategory = id => {
    onCategoryChange(id)
  }

  const clickRating = id => {
    onRatingChange(id)
  }

  const onClickFilter = () => {
    onFilterClear()
  }

  const inputChange = event => {
    onSearchChange(event.target.value)
  }

  const onkeyDown = event => {
    // const {onEnterSearch} = props
    if (event.key === 'Enter') {
      onEnterSearch()
    }
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input
        placeholder="search"
        value={search}
        onChange={inputChange}
        type="search"
        onKeyDown={onkeyDown}
      />
      <BsSearch />

      <div className="category-items">
        <h1>Category</h1>
        <ul className="rating-list-con">
          {categoryOptions.map(each => (
            <p
              key={each.categoryId}
              onClick={() => clickCategory(each.categoryId)}
            >
              {each.name}
            </p>
          ))}
        </ul>
      </div>
      <h1>Rating</h1>
      <ul className="rating-list-con">
        {ratingsList.map(each => (
          <li
            className="rating-list-item"
            onClick={() => clickRating(each.ratingId)}
            key={each.ratingId}
          >
            <img
              className="rating-image"
              alt={`rating ${each.ratingId}`}
              src={each.imageUrl}
            />
            <p>&up</p>
          </li>
        ))}
      </ul>

      <button
        className="clear-filter-button"
        onClick={onClickFilter}
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
