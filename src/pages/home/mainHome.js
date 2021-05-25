import { Collections } from '../components/dataList';
import Card from '../components/card'
const MainHome = () => {
    console.log(Collections)
    return (
        <main className="main">
            {/*collections sections */}
            <section className="collection">
                <h2 className="collection__title">Our collection</h2>
                <ul className="collection__list">
                    {Collections.map(item => {
                        return <li className="collection__item" key={item.id}>
                            <div className="collection__img">
                                <img className="collection__img" src={item.imgUrl} alt={`enjoy our ${item.title}`} />
                            </div>
                            <div className="collection__details">
                                <h3 className="collection__subtitle">{item.title}</h3>
                                <p className="collection__summary">{item.summary}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </section>
            {/*end of collections sections */}

            {/*aside section */}
            <aside className="aside">
                <div className="aside__container">
                    <h2 className="aside__title">Why choose us?</h2>
                    <p className="aside__summary">
                        A large part of our role is choosing which particular coffees will be featured
                        in our range. This means working closely with the best coffee growers to give
                        you a more impactful experience on every level.
                    </p>
                </div>
                <div className="decoration">
                </div>
            </aside>
            {/*end of aside section */}

            {/*cards - benefits for choosing us */}
            <section className="cards__list">
                <Card />
            </section>
            {/*end of cards - benefits for choosing us */}

            <section className="works">
                <h2 className="works__title">How it works</h2>
            </section>
        </main>
    )
}
export default MainHome