//import CoffeeManMobile from '../../assets/about/mobile/image-commitment.jpg'
//import CoffeeManMedium from '../../assets/about/tablet/image-commitment.jpg'
//import CoffeeManDesktop from '../../assets/about/desktop/image-commitment.jpg'
import { CommitmentData } from '../components/dataList'


const Commitment = () => {
    return (
        <section className="commitment">
            <ul className="commitment__list">
                {CommitmentData.map(commitmentItem => {
                    return <li key={commitmentItem.id} className="commitment__list__item">

                        <div className="commitment__img__container">
                            <picture className="commitment__pic">
                                <source media="(min-width: 1020px)" srcSet={commitmentItem.imgUrl.desktop} />
                                <source media="(min-width: 720px)" srcSet={commitmentItem.imgUrl.tablet} />
                                <source media="(max-width: 719px)" srcSet={commitmentItem.imgUrl.mobile} />
                                
                                <img className="commitment__img" src={commitmentItem.imgUrl.mobile}
                                    srcSet={commitmentItem.imgUrl.mobile}
                                    alt={commitmentItem.alt}
                                />
                            </picture>
                        </div>

                        <div className="commitment__details">
                            <h2 className="commitment__title">{commitmentItem.title}</h2>
                            <p className="commitment__summary">
                                {commitmentItem.summary}
                            </p>
                        </div>
                    </li>
                })}
            </ul>
            {/*   
                <div className="commitment__img__container">
                    <picture className="commitment__pic">
                        <source media="(max-width: 719px)" srcSet={CommitmentData[0].imgUrl.mobile} />
                        <source media="(min-width: 720px)" srcSet={CommitmentData[0].imgUrl.tablet} />
                        <source media="(min-width: 1020px)" srcSet={CommitmentData[0].imgUrl.desktop} />
                        <img className="commitment__img" src={CommitmentData[0].imgUrl.mobile} alt="man making coffee"
                         />
                    </picture>
                </div>
                <div className="commitment__details">
                    <h2 className="commitment__title">Our commitment</h2>
                    <p className="commitment__summary">
                        We’re built on a simple mission and a commitment to doing good along the way. We want to
                        make it easy for you to discover and brew the world’s best coffee at home. It all starts
                        at the source. To locate the specific lots we want to purchase, we travel nearly 60 days
                        a year trying to understand the challenges and opportunities in each of these places.
                        We collaborate with exceptional coffee growers and empower a global community of farmers
                        through with well above fair-trade benchmarks. We also offer training, support farm community
                        initiatives, and invest in coffee plant science. Curating only the finest blends, we roast
                        each lot to highlight tasting profiles distinctive to their native growing region.
                    </p>
                </div>
                */}
        </section>
    )
}
export default Commitment