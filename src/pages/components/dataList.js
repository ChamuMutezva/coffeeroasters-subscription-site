import gran from '../../assets/home/desktop/image-gran-espresso.png'
import planalto from '../../assets/home/desktop/image-planalto.png'
import piccolo from '../../assets/home/desktop/image-piccollo.png'
import danche from '../../assets/home/desktop/image-danche.png'

//cardlist images
import quality from '../../assets/home/desktop/icon-coffee-bean.svg'
import gifts from '../../assets/home/desktop/icon-gift.svg'
import truck from '../../assets/home/desktop/icon-truck.svg'

//Commitment images
import CoffeeManMobile from '../../assets/about/mobile/image-commitment.jpg'
import CoffeeManMedium from '../../assets/about/tablet/image-commitment.jpg'
import CoffeeManDesktop from '../../assets/about/desktop/image-commitment.jpg'

import QualityMobile from '../../assets/about/mobile/image-quality.jpg'
import QualityTablet from '../../assets/about/tablet/image-quality.jpg'
import QualityDesktop from '../../assets/about/desktop/image-quality.jpg'

export const Collections = [
    {
        id: '1',
        title: 'Gran Espresso',
        summary: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
        imgUrl: gran,
    },
    {
        id: '2',
        title: 'Planalto',
        summary: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
        imgUrl: planalto,
    },
    {
        id: '3',
        title: 'Piccollo',
        summary: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
        imgUrl: piccolo,
    },
    {
        id: '4',
        title: 'Danche',
        summary: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
        imgUrl: danche,
    }

]

export const CardList = [
    {
        id: '10',
        title: 'Best quality',
        summary: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        imgUrl: quality,
        alt: 'coffee beans of superior quality'
    },
    {
        id: '11',
        title: 'Exclusive benefits',
        summary: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        imgUrl: gifts,
        alt: 'exclusive benefits for all'
    },
    {
        id: '12',
        title: 'Free shipping',
        summary: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        imgUrl: truck,
        alt: 'delivering at your doorstep'
    }
]

export const Works = [
    {
        id: '21',
        title: 'Pick your coffee',
        sub: '01',
        summary: `Select from our evolving range of artisan coffees. Our beans are ethically 
        sourced and we pay fair prices for them. There are new coffees in all profiles 
        every month for you to try out.`
    },
    {
        id: '22',
        title: ' Choose the frequency',
        sub: '02',
        summary: `Customize your order frequency, quantity, even your roast style and grind type. 
    Pause, skip or cancel your subscription with no commitment through our online portal.`
    },
    {
        id: '23',
        title: 'Receive and enjoy!',
        sub: '03',
        summary: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
    world-class coffees curated to provide a distinct tasting experience.`
    },

]

export const CommitmentData = [
    {
        id: '30',
        title: 'Our commitment',
        imgUrl: {
            mobile: CoffeeManMobile,
            tablet: CoffeeManMedium,
            desktop: CoffeeManDesktop,
        },
        summary: `We’re built on a simple mission and a commitment to doing good along the way. We want to
        make it easy for you to discover and brew the world’s best coffee at home. It all starts
        at the source. To locate the specific lots we want to purchase, we travel nearly 60 days
        a year trying to understand the challenges and opportunities in each of these places.
        We collaborate with exceptional coffee growers and empower a global community of farmers
        through with well above fair-trade benchmarks. We also offer training, support farm community
        initiatives, and invest in coffee plant science. Curating only the finest blends, we roast
        each lot to highlight tasting profiles distinctive to their native growing region.`
    },
    {
        id: '31',
        title: 'Uncompromising quality',
        imgUrl: {
            mobile: QualityMobile,
            tablet: QualityTablet,
            desktop: QualityDesktop,
        },
        summary: `Although we work with growers who pay close attention to all stages of harvest and processing, 
        we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
        coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
        consistent, user-friendly coffee, so that brewing is easy and enjoyable.`,
    }
]


  