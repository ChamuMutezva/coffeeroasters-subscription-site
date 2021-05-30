import { LocateUs } from '../components/dataList'
const LocationMap = () => {

    return(
        <section className="map">
            <h2 className="map__main__title">Our headquarters</h2>
            <ul className="map__list__container">
                {LocateUs.map(site => {
                    return <li key={site.id} className="map__list">
                        <div className="map__container">
                            <img className="map__img" src={site.locationMap} alt="" />
                        </div>
                        <div className="map__content">
                            <address>
                                <span className="map__title">{site.city}</span>
                                <p className="map__address">
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