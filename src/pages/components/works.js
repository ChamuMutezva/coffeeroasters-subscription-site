import { Works } from './dataList'
const WorkList = () => {
    return(
        <ul className="work__list">
            {Works.map(work => {
                return <li className="work__item" key={work.id}>
                        <span className={`work__num span${work.id}`}>{work.sub}</span>
                        <h3 className="work__item__title">{work.title}</h3>
                        <p className="work__summary">{work.summary}</p>
                </li>
            })}
        </ul>
    )
}
export default WorkList