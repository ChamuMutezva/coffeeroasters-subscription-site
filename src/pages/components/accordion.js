import { useState } from 'react'
import { PlanSteps } from '../components/dataList'
const Accordion = () => {
    const initialState = {
        preference: null,
        bean: "",
        quantity: "",
        grind: "",
        deliveries: "",
    }

    const [show, setShow] = useState(false)
    const [radioData, setRadioData] = useState(initialState)

    const deliver = radioData.deliveries === "weekly" ? "Every week" : radioData.deliveries === "fortnight" ? "Every 2 weeks" : "Monthly"
    const handleShow = (evt) => {
        setShow(!show)

        const btn = evt.target
        const parent = btn.parentElement
        const attribute = btn.getAttribute('data-target')
        console.log(attribute)
        const targetDiv = parent.nextSibling
        // console.log(targetDiv)
        btn.classList.toggle("collapsed")
        // targetDiv.classList.toggle("collapse")
        targetDiv.classList.toggle(attribute)
        targetDiv.classList.toggle("collapse__show")
    }

    const onChange = (evt) => {
        console.log(evt.target)
        const { name, id } = evt.target
        setRadioData({ ...radioData, [name]: id })
        console.log(name)
        console.log(id)
        console.log(radioData)
    }

    //form submission
    const handleSubmit = (evt) => {
        if (typeof (radioData.preference === null)) {
            console.log("enter data")
        }
       // document.body.classList.add("hide__scroll")
        const modal = document.querySelector(".modal__subscribe")
        modal.classList.toggle("subscribe__show")
        console.log(evt)
        evt.preventDefault()
    }

    //handle subscribe form
    const handleSubscribe = (evt) => {
       // document.body.classList.remove("hide__scroll")
        const modal = document.querySelector(".modal__subscribe")
        modal.classList.toggle("subscribe__show")
        evt.preventDefault()
    }
    return (

        <div className="accordion__wrapper">
            <ul className="accordion">
                {PlanSteps.map(plan => {
                    return <li className="accordion__list__item" key={plan.id}>
                        <div id={plan.name} className="accordion__item">
                            <h3 className="accordion__header">
                                <button aria-expanded="true" className={`accordion--btn`} onClick={handleShow} data-toggle="collapse"
                                    data-target={`collapse${plan.id}`} >{plan.question}</button>
                            </h3>
                            <div id={`collapse${plan.id}`} className={`plan__card`}>
                                {plan.options.map(opt => {
                                    return <div className={`plan__select ${plan.name}`} key={opt.id}>
                                        <input type="radio" name={plan.name} id={opt.sub}
                                         onChange={onChange} />
                                        <label className="radio__label" htmlFor={opt.sub}>
                                            <span className={`plan__card__title radio__big__text wrapper__${plan.name}`}>{opt.type}</span>
                                            <span className={`plan__card__content radio__small__text ${opt.sub}`}>{opt.answer}</span>
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>
                    </li>
                })}
            </ul>

            <div className="order">
                <form className="order__wrapper" onSubmit={handleSubmit}>
                    <div className="order__summary">
                        <h3 className="order__title">Order Summary</h3>
                        <p className="order__content">
                            “I drink my coffee as
                             <span className="ordered__item"> {radioData.preference}</span>, with a
                             <span className="ordered__item"> {radioData.bean}</span> type of bean.
                             <span className="ordered__item"> {radioData.quantity}</span> ground ala
                             <span className="ordered__item"> {radioData.grind}</span>, sent to me
                             <span className="ordered__item"> {deliver}</span>.”
                        </p>
                    </div>
                    <button type="submit" className="hero--btn order--btn">Create your plan</button>
                </form>
            </div>

            <div className="modal__subscribe">
                <form className="subscribe__summary" onSubmit={handleSubscribe}>
                    <div className="subscribe__title__wrapper">
                        <h3 className="subscribe__title">Order Summary</h3>
                    </div>
                    <p className="subscribe__content">
                        “I drink my coffee as
                             <span className="ordered__item"> {radioData.preference} </span>, with a
                             <span className="ordered__item"> {radioData.bean} </span> type of bean.
                             <span className="ordered__item"> {radioData.quantity} </span> ground ala
                             <span className="ordered__item"> {radioData.grind} </span>, sent to me
                             <span className="ordered__item"> {deliver}</span>.”
                    </p>
                    <p className="subscribe__confirm">
                        Is this correct? You can proceed to checkout or go back to plan selection if something
                        is off. Subscription discount codes can also be redeemed at the checkout.
                     </p>
                     <button type="submit" className="hero--btn order--btn checkout--btn">Checkout $14 / mo</button>
                </form>
  
            </div>
        </div>

    )
}
export default Accordion