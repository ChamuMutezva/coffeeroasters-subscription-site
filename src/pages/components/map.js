import { LocateUs } from '../components/dataList'
const LocationMap = () => {

    return(
        <section className="map">
            <h2 className="map__container">Our headquarters</h2>
            <ul>
                {LocateUs.map(site => {
                    return <li key={site.id}>
                        <div className="map__container">
                            <img src={site.locationMap} alt="" />
                        </div>
                        <div className="map__content">
                            <address>
                                <span className="map__title">{site.city}</span>
                                <p>
                                   {site.street} <br/>
                                   {site.town} <br/>
                                   {site.code} <br/>
                                   {site.phone} <br/>
                                </p>
                            </address>
                        </div>
                    </li>
                })}
            </ul>

        </section>
    )
}
export default LocationMap