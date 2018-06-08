import {ADD_INGREDIENT,DELETE_INGREDIENT,SHOW_DETAILS,HIDE_DETAILS} from '../constants/action-types';
const initialState = {
    ingredients:[],
    dishes:[
        {
            id:1,
            name:'Dish1',
            time:10,
            ingredients:['rise','','',''],
            description:['','','',],
            img:''
        },
        {
            id:2,
            name:'Dish2',
            time:20,
            ingredients:['cheese','','',''],
            description:['','','',],
            img:''
        },
        {
            id:3,
            name:'Dish2',
            time:10,
            ingredients:['tomato','','',''],
            description:['','','',],
            img:''
        },
        {
            id:4,
            name:'Dish4',
            time:30,
            ingredients:['potato','','',''],
            description:['','','',],
            img:''
        }

    ]
};

const rootReducer = (state = initialState, action)=> {
    switch (action.type){
        case ADD_INGREDIENT: //do checking existed ingredient
                return { ...state, ingredients: state.ingredients.concat(action.payload)};
        case DELETE_INGREDIENT:
            let index = state.ingredients.find(function (obj){return obj.id===action.payload;}).id;
            return { ...state, ingredients: state.ingredients.filter(function (obj) {return obj.id!==index;})};

        default:
            return state;
    }
};
export default rootReducer;