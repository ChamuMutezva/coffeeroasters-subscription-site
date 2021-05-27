import { CardList } from '../components/dataList';
const Card = () => {
    return (
        <ul className="cards">
            {CardList.map(card => {
                return <li className="card" key={card.id}>
                             <div className="card__wrapper">
                                 <div className="card__img__wrapper">
                                     <img className="card__img" src={card.imgUrl} alt={card.alt} />
                                 </div>                                
                                 <div className="card__details">
                                     <h3 className="card__title">{card.title}</h3>
                                     <p className="card__summary">{card.summary}</p>
                                 </div>
                             </div>
                        </li>
            })}
        </ul>
    )
}
export default Card