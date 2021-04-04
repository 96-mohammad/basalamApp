import Home from '../src/Home';
import SelectAddress from '../src/SelectAddress';
import Header from './components/Header';

export const routes = [
    { 
        path: '',
        components: {
            header: Header,
            default: Home
        },
        name: 'home'
    },
    {
        path: '/address',
        components: {
            header: Header,
            default: SelectAddress
        },
        name: 'address',       
    }
];