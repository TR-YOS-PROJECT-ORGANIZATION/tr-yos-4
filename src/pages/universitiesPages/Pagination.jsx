const Pagination = () => {

return (
    <div class="clearfix">
        <div class="hint-text">Showing <b>5</b> out of <b>40</b> entries</div>
        <ul class="pagination">
            <li class="page-item disabled"><a href="#">Previous</a></li>
            <li class="page-item "><a href="/homePage" class="page-link">1</a></li>
            <li class="page-item "><a href="#" class="page-link">2</a></li>
            <li class="page-item active"><a href="#" class="page-link">3</a></li>
            <li class="page-item "><a href="#" class="page-link">4</a></li>
            <li class="page-item "><a href="#" class="page-link">5</a></li>
            <li class="page-item "><a href="#" class="page-link">Next</a></li>
            

        </ul>
    </div>
)
}
export default Pagination;