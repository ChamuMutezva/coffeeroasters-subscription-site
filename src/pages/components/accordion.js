import { useState, useEffect } from 'react'
import { PlanSteps } from '../components/dataList'
const Accordion = () => {
    const initialState = {
        preference: null,
        bean: null,
        quantity: null,
        grind: null,
        deliveries: null,
    }

    const [show, setShow] = useState(false)
    const [radioData, setRadioData] = useState(initialState)


    useEffect(() => {
        console.log("radio data changes")

        const orderBtn = document.querySelector(".order--btn")


        if (radioData.preference !== null && radioData.bean !== null &&
            radioData.quantity !== null && radioData.grind !== null &&
            radioData.deliveries !== null) {
            orderBtn.classList.remove("disabled")
        } else {
            orderBtn.classList.add("disabled")
        }
    }, [radioData])

    const deliver = radioData.deliveries === "weekly" ? "Every week" : radioData.deliveries === "fortnight" ? "Every 2 weeks" : radioData.deliveries === 'monthly' ? "Monthly" : "_____"
    const shippingCost = radioData.deliveries === "weekly" ? "$14.00" : radioData.deliveries === "fortnight" ? "$17.25" : "$22.50"

    //toggle - accordion control centre 
    //click the question to reveal and close the answers 
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

    //radio buttons to make the selection
    const onChange = (evt) => {

        console.log(evt.target)
        const { name, id } = evt.target
        setRadioData({ ...radioData, [name]: id })
        console.log(name)
        console.log(id)
        console.log(radioData)

    }

    //form submission - to open the subscribe modal panel
    const handleSubmit = (evt) => {

        const overlay = document.querySelector(".overlay")
        const modal = document.querySelector(".modal__subscribe")

        overlay.classList.remove("hide__overlay")
        modal.classList.toggle("subscribe__show")
        console.log(evt)
        evt.preventDefault()
    }

    //handle subscribe form - checkout modal
    const handleSubscribe = (evt) => {
        const overlay = document.querySelector(".overlay")
        const modal = document.querySelector(".modal__subscribe")
        modal.classList.toggle("subscribe__show")
        overlay.classList.add("hide__overlay")

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
                    <button type="submit" className="hero--btn order--btn disabled">Create your plan</button>
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
                    <div className="checkout">
                        <span className="checkout__amount">{shippingCost}/mo</span><button type="submit" className="hero--btn order--btn checkout--btn">Checkout </button>
                    </div>

                </form>

            </div>

            <div className="overlay hide__overlay"></div>
        </div>

    )
}
export default Accordion