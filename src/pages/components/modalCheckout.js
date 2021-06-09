const ModalCheckout = (props) => {
    return (
        <div className="modal__subscribe">
            <form className="subscribe__summary" onSubmit={props.onSubmit}>
                <div className="subscribe__title__wrapper">
                    <h3 className="subscribe__title">Order Summary</h3>
                </div>
                <p className="subscribe__content">
                    “I drink my coffee as
                     <span className="ordered__item"> {props.prefer}</span>, with a
                     <span className="ordered__item"> {props.bean} </span> type of bean.
                     <span className="ordered__item"> {props.quantity} </span> ground ala
                     <span className="ordered__item"> {props.grind} </span>, sent to me
                     <span className="ordered__item"> {props.deliver}</span>.”
                 </p>
                <p className="subscribe__confirm">
                    Is this correct? You can proceed to checkout or go back to plan selection if something
                    is off. Subscription discount codes can also be redeemed at the checkout.
             </p>
                <div className="checkout">
                    <span className="checkout__amount">{props.shipping}/mo</span><button type="submit" className="hero--btn order--btn checkout--btn">Checkout </button>
                </div>

            </form>

        </div>
    )
}
export default ModalCheckout