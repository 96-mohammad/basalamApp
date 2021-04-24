import TheHome from './components/TheHome';
import SelectAddress from './components/SelectAddress';
import TheHeader from './components/TheHeader';
import ThePayment from './components/ThePayment';
import SavePage from './components/SavePage';

export const routes = [
    { 
        path: '',
        components: {
            header: TheHeader,
            default: TheHome
        },
        name: 'home'
    },
    {
        path: '/address',
        components: {
            header: TheHeader,
            default: SelectAddress
        },
        name: 'address',       
    },
    {
        path: '/payment',
        components: {
            header: TheHeader,
            default: ThePayment
        },
        name: 'payment'
    },
    {
        path: '/savePage',
        components: {
            header: TheHeader,
            default: SavePage
        },
        name: 'savePage'
    }
];