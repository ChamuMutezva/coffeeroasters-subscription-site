import gran from '../../assets/home/desktop/image-gran-espresso.png'
import planalto from '../../assets/home/desktop/image-planalto.png'
import piccolo from '../../assets/home/desktop/image-piccollo.png'
import danche from '../../assets/home/desktop/image-danche.png'

//cardlist images
import quality from '../../assets/home/desktop/icon-coffee-bean.svg'
import gifts from '../../assets/home/desktop/icon-gift.svg'
import truck from '../../assets/home/desktop/icon-truck.svg'

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