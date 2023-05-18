import Card from './Card';

function Data({ data }) {

    return (
        <>
            <div className='row mt-4 px-3 justify-content-center'>
                <div className='col-md-9 col-11  p-2  shadow-sm d-flex justify-content-between align-items-center text-muted'>
                    <div className='d-flex align-items-center'>
                        <img src={require('../images/thumb.png')} alt="png" style={{ height: "2.5rem" }} />
                        <div className='ms-3' >
                            <span style={{ fontSize: "1rem", fontWeight: "500" }}>{data.current.temp_c}°C</span><br />
                            <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>{data.current.condition.text}</span>
                        </div>
                    </div>
                    <div className='data'>
                        <span style={{ fontSize: "1rem", fontWeight: "500" }}>{data.location.name}</span><br />
                        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>{data.location.localtime}</span>
                    </div>
                </div>
            </div>
            <div className='row gap-2 my-3 justify-content-center'>
                <Card data={data.current.feelslike_c} type="feels like" unit={"°C"}>
                    <i className="bi bi-thermometer-half"></i>
                </Card>
                <Card data={data.current.precip_mm} type="rain" unit={"mm"}>
                    <i className="bi bi-cloud-drizzle"></i>
                </Card>
                <Card data={data.current.vis_km} type="visibility" unit={"km"}>
                    <i className="bi bi-eye"></i>
                </Card>
                <Card data={data.current.wind_kph} type="wind speed" unit={" kph"}>
                    <i className="bi bi-fan"></i>
                </Card>
            </div>
            <div className='row gap-2 justify-content-center'>
                <Card data={data.current.pressure_mb} type="pressure" unit={"mb"}>
                    <i className="bi bi-cloud-haze2"></i>
                </Card>
                <Card data={data.current.gust_kph} type="gust" unit=" kph">
                    <i className="bi bi-hurricane"></i>
                </Card>
                <Card data={data.current.humidity} type="humidity" unit={"%"}>
                    <i className="bi bi-moisture"></i>
                </Card>
                <Card data={data.current.cloud} type="cloud" unit={"%"}>
                    <i className="bi bi-cloud"></i>
                </Card>
            </div>
        </>
    )
}

export default Data;