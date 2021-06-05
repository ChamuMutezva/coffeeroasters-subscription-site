import { useState } from 'react'
import { PlanSteps } from '../components/dataList'
const Plan = () => {
      
    const initialState = {
        preference: false,
        bean: false,
        qty: false,
        grind: false,
        deliver: false
    }

    const [show, setShow] = useState(false)
    const [radioData, setRadioData] = useState(initialState)
    // const {name} = PlanSteps
   // console.log(PlanSteps)
  // ${show ? "collapse" : ""}
 // ${show ? "collapsed" : ""} button 
    const handleShow = (evt) => {
        setShow(!show)
      // console.log(evt.target)
       const btn = evt.target
      const parent = btn.parentElement
     // console.log(parent)
      const targetDiv = parent.nextSibling
     // console.log(targetDiv)
      btn.classList.toggle("collapsed")
      targetDiv.classList.toggle("collapse")
    }

    const onChange = (evt) => {
        console.log(evt.target)
        const {name, checked} = evt.target
        setRadioData({...radioData, [name]: checked})
       console.log(name)
       console.log(checked)
    }
    return (
        <section className="plan__section" >
            <aside className="plan__nav">
                <ul className="plan__nav__list">
                    <li className="plan__nav__item">
                        <a href="#preferences">
                            <span className="nav__item__num">01 </span>
                            <span className="nav__item__text">Preferences</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#bean">
                            <span className="nav__item__num">02 </span>
                            <span className="nav__item__text">Bean Type</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#quantity">
                            <span className="nav__item__num">03 </span>
                            <span className="nav__item__text">Quantity</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#grind">
                            <span className="nav__item__num">04 </span>
                            <span className="nav__item__text">Grind Option</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#deliveries">
                            <span className="nav__item__num">05 </span>
                            <span className="nav__item__text">Deliveries</span>
                        </a>
                    </li>
                </ul>
            </aside>
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
                                        <input type="radio" name={plan.name} id={opt.sub} onChange={onChange} />
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
        </section>
    )
}
export default Plan
