

function SearchBar({setCity,setData,setFail}){
    function handleChange(e){
        if(e.key === "Enter"){
            setData("");
            setFail(false);
            setCity(e.target.value);
            e.target.value = "";
        }
    }

    return(
        <>
            <div id="search"  className=' d-flex rounded-1 border border-0 shadow px-3'>
                <i className="bi bi-search text-muted align-self-center"></i>
                <input type="search" onKeyUp={handleChange}
                className="border border-0 ms-3 w-100 outline-0"/>
            </div>
        </>
    )
}

export default SearchBar;