function Pagination({number, onClick}) {
  return(
<button className="number__page" value={number} onClick={onClick}>
    {number + 1}
</button>
  )
  
}

export default Pagination;
