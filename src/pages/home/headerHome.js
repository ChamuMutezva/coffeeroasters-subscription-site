import Hero from '../components/hero'
const HeaderHome = () => {
    return (
      <div className="hero hero__home">          
          <Hero title="Great coffee made simple."
                content="Start your mornings with the world’s best coffees. Try our expertly curated artisan
                coffees from our best roasters delivered directly to your door, at your schedule."
                button="Create your plan"/>
      </div>    
    )
}
export default HeaderHome