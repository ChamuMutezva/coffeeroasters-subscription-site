import { Link } from 'react-router-dom'
import WorkList from '../components/works'
const WorksComponent = () => {
    return (
        <section className="works">
            <h2 className="works__title">How it works</h2>
            <div className="works__wrapper">
                <WorkList />
                <div className="works__wrapper--btn">
                    <Link to="/subscribe" className={`anchor nav__item--btn hero--btn`}>Create your plan</Link>
                </div>
            </div>
        </section>
    )
}
export default WorksComponent