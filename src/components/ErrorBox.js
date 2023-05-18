function ErrorBox({ isOnLine }) {
    return (
        <>
            <div className="row  mt-4 justify-content-center">
                <div className="col-md-9 col-11 d-flex shadow gap-md-2 rounded-1 gap-4 p-2 justify-content-between align-items-center rounded-1">
                    {isOnLine ? (
                        <>
                            <iframe className="giphy-embed  rounded-2 iframe" title="SorryGif" src="https://giphy.com/embed/LBFKj4UxqpIhAvbjNK" frameBorder="0" allow="camera 'none'; microphone 'none'; geolocation 'none'" sandbox=" allow-scripts"></iframe>
                            <div className="error-text ">
                                <span className="text-danger">
                                    Oops!
                                </span>
                                <p className="text-muted">Something went wrong<br></br>Try again</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <img src={require("../images/error_icon.jfif")} alt="error" className="iframe"></img>
                            <div className="error-text ">
                                <span className="text-danger">
                                    You're Offline
                                </span>
                                <p className="text-muted">Turn on your internet connection</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default ErrorBox;