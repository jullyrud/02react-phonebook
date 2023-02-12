
export function Filter  ({onFilterChange}) {

    return (
        <>  
            <label htmlFor="search"> Find contacts by name </label>
            <input onChange={onFilterChange}  type="text" id="search" />
        </>
    )

}