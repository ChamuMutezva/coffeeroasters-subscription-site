import { useState, useEffect } from 'react'
import { PlanSteps } from '../components/dataList'
import ModalCheckout from '../components/modalCheckout'

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
    const [verb, setVerb] = useState("as")

    useEffect(() => {
        console.log("radio data changes")

        const orderBtn = document.querySelector(".order--btn")
        if (radioData.preference !== null && radioData.bean !== null &&
            radioData.quantity !== null &&
            radioData.deliveries !== null) {
            orderBtn.classList.remove("disabled")
        } else {
            orderBtn.classList.add("disabled")
        }
    }, [radioData])

    //const msg = `Make selections using the options suggested above. The options includes the 
    //type of coffee you prefer, how you like your coffee, order quantity and delivery options`
    const prefered = radioData.preference === null ? " _____" : radioData.preference
    const beanChoice = radioData.bean === null ? "_____" : radioData.bean
    const qty = radioData.quantity === null ? "_____" : radioData.quantity
    const grind = radioData.grind === null ? "_____" : radioData.grind
    const deliver = radioData.deliveries === "weekly" ? "Every week" : radioData.deliveries === "fortnight" ? "Every 2 weeks" : radioData.deliveries === 'monthly' ? "Monthly" : "_____"
    const shippingCost = () => {
        if (radioData.quantity === "250g") {
            return radioData.deliveries === "weekly" ? 7.2 * 4 :
                radioData.deliveries === "fortnight" ?
                    9.60 * 2 : 12.00
        } else if (radioData.quantity === "500g") {
            return radioData.deliveries === "weekly" ? 13 * 4 :
                radioData.deliveries === "fortnight" ?
                    17.50 * 2 : 22.00
        } else {
            return radioData.deliveries === "weekly" ? 22 * 4 :
                radioData.deliveries === "fortnight" ?
                    32 * 2 : 42.00
        }
    }
    // radioData.deliveries === "weekly" ? "$14.00" : radioData.deliveries === "fortnight" ? "$17.25" : "$22.50"

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

        const preferredChoice = Array.from(document.querySelectorAll("input[name='preference']"))
        console.log(preferredChoice)
        const grind = document.getElementById("accordionBtn04")
        const grind__child = document.getElementById("collapse04")
        const show__grind = document.querySelector(".show__grind")
        const orderBtn = document.querySelector(".order--btn")

        // check if in the first option of the accordion that "Capsule" is selected
        // if it is selected , disable the grind option and uncheck its options
        const prefer = preferredChoice.filter(choice => choice.checked && choice.id === "capsule")
        console.log(prefer)
        if (prefer.length > 0) {
            grind.classList.add("grind__disable")
            grind__child.classList.add("collapse04")
            show__grind.classList.add("hide__grind")
            //setRadioData({...radioData, grind : null})
            setVerb("using")

        } else {
            grind.classList.remove("grind__disable")
            grind__child.classList.remove("collapse04")
            show__grind.classList.remove("hide__grind")
            setVerb("as")
            if (radioData.grind !== null) {
                orderBtn.classList.remove("disabled")
            } else {
                orderBtn.classList.add("disabled")
            }
        }

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
                                <button aria-expanded={plan.id === "01" ? true : false}
                                    aria-controls={`collapse${plan.id}`}
                                    id={`accordionBtn${plan.id}`} className={`accordion--btn`} onClick={handleShow} data-toggle="collapse"
                                    data-target={`collapse${plan.id}`} >{plan.question}</button>
                            </h3>
                            <div id={`collapse${plan.id}`} role="region" className={`plan__card collapse${plan.id}`}>

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
                            “I drink my coffee <strong>{verb}</strong>
                            <span className="ordered__item"> {prefered}</span>, with a
                            <span className="ordered__item"> {beanChoice}</span> type of bean.
                            <span className="ordered__item"> {qty} </span>
                            <strong className="show__grind"> ground ala
                                <span className="ordered__item"> {grind}</span>,
                            </strong> sent to me
                            <span className="ordered__item"> {deliver}</span>.”
                        </p>
                    </div>
                    <button type="submit" className="hero--btn order--btn disabled">Create your plan</button>
                </form>
            </div>

            <ModalCheckout onSubmit={handleSubscribe} prefer={radioData.preference}
                bean={radioData.bean} quantity={radioData.quantity} grind={radioData.grind}
                deliver={deliver} shipping={shippingCost()} verb={verb} />

            <div className="overlay hide__overlay"></div>
        </div>

    )
}
export default Accordion