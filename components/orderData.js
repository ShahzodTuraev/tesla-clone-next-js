import model31 from '../public/images/order page/model-3-1.jpg'
import model32 from '../public/images/order page/model-3-2.jpg'
import model33 from '../public/images/order page/model-3-3.jpg'
import models1 from '../public/images/order page/model-s-1.jpg'
import models2 from '../public/images/order page/model-s-2.jpg'
import models3 from '../public/images/order page/model-s-3.jpg'
import modelx1 from '../public/images/order page/model-x-1.jpg'
import modelx2 from '../public/images/order page/model-x-2.jpg'
import modelx3 from '../public/images/order page/model-x-3.jpg'
import modely1 from '../public/images/order page/model-y-1.jpg'
import modely2 from '../public/images/order page/model-y-2.jpg'
import modely3 from '../public/images/order page/model-y-3.jpg'
export const data =[
    {
        id: 1, 
        name: 'Module 3', 
        src: [
            model31, 
            model32, 
            model33
        ], 
        type: [
            {name: 'Model 3', mi: '272', mph: '140', sec: '5.8', price: '$40,240'},
            {name: 'Model 3 Long Range', mi: '325+', mph: '145', sec: '4.2', price: '$47,240'},
            {name: 'Model 3 Performance', mi: '315', mph: '162', sec: '3.1', price: '$53,240'},
            ]
    },
    {
        id: 2, 
        name: 'Module S', 
        src: [
            models1, 
            models2, 
            models3
        ], 
        type: [
            {name: 'Model S', mi: '405', mph: '149', sec: '3.1', price: '$87,490'},
            {name: 'Model S Plaid', mi: '396', mph: '200', sec: '1.99', price: '$107,490'},
            ]
    },
    {
        id: 3, 
        name: 'Module X', 
        src: [
            modelx1, 
            modelx2, 
            modelx3,
        ], 
        type: [
            {id: 31, name: 'Model X', mi: '348', mph: '149', sec: '3.8', price: '$97,490'},
            {id: 32, name: 'Model X Plaid', mi: '333', mph: '149', sec: '2.5', price: '$107,490'},
            ]
    },
    {
        id: 4, 
        name: 'Module Y', 
        src: [
            modely1, 
            modely2, 
            modely3,
        ], 
        type: [
            {name: 'Model Y', mi: '279', mph: '135', sec: '5.0', price: '$47,240'},
            {name: 'Model Y Long Range', mi: '350', mph: '135', sec: '4.8', price: '$50,240'},
            {name: 'Model Y Performance', mi: '303', mph: '155', sec: '3.5', price: '$54,240'},
            ]
    },
    
];
