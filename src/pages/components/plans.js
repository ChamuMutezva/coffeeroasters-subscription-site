import { PlanSteps } from '../components/dataList'
const Plan = () => {
    // const {name} = PlanSteps
    // console.log(PlanSteps)


    return (
        <section>
            <ul className="accordion">
                {PlanSteps.map(plan => {
                    return <li key={plan.id}>
                        <div className="accordion__item">
                            <h3 className="accordion__header">
                                <button className="accordion--btn" data-bs-toggle="collapse">{plan.question}</button>
                            </h3>
                            <div className="collapse plan__card">
                                {plan.options.map(opt => {
                                    return <div className={`${plan.name}`} key={opt.id}>
                                        <h3 className={`wrapper__${plan.name}`}>
                                            {opt.type}
                                        </h3>
                                        <p id={`${opt.sub}`}>{opt.answer}</p>
                                    </div>
                                })}
                            </div>
                        </div>

                    </li>

                })}
            </ul>
        </section>
    )
}
export default Plan