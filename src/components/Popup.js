function Popup(){
    return(
        <>
        <div className="modal fade " id="myModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Error</h4>
                        <button type="button" className="btn-close btn-danger" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        You're offline pls connect to internet
                    </div>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Click</button>
        </>
    )
}

export default Popup;