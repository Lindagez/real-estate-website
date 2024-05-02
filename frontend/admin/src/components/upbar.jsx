export default function UpBar({
  setSwitchPanel,
  search,
  searchFilter,
  filterType,
  setSearch,
  setSearchFilter,
}) {
  const handleClick = () => {
    setSwitchPanel('add');
  };

  const handleTrash = () => {
    setSwitchPanel('trash');
  }

  const handleFilter = event => {
    const selectedOption = event.target.value;
    setSearchFilter(selectedOption);
  };

  const handleSearch = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const Filter = () => (
    <select
      name='searchType'
      id='searchType'
      className='form-control'
      value={searchFilter}
      onChange={handleFilter}
    >
      <option value='none' default>
        Please select
      </option>
      {filterType.map((f, i) => (
        <option key={i} value={f.value}>
          {f.name}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <div className='flex'>
        <form action='' className='my-d justify-content-between mb-3 mt-3'>
          <div className='my-d'>
            <div className='input-group w-auto my-auto mx-1 mt-2 mb-2'>
              <Filter />
            </div>
            <div className='input-group w-auto my-auto  mx-1 mt-2 mb-2'>
              <input
                autoComplete='off'
                type='search'
                className='form-control rounded'
                placeholder='Search '
                value={search}
                onChange={handleSearch}
                style={{ minWidth: '225px' }}
              />
              <span className='input-group-text border-0'>
                <i className='fas fa-search'></i>
              </span>
            </div>
          </div>
          <div className='input-group w-auto'>
            <button className='m-2 my-btn btn btn-dark' onClick={handleClick}>
              Add
            </button>
            <button className='m-2 my-btn btn btn-dark' onClick={handleTrash}>
              Trash
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
