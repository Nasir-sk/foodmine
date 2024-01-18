import { Food } from "./app/shared/models/food";

export const sample_foods: Food[]=[
    {
        id:'1',
        name:'Burger',
        price:9,
        cookTime:'40-50',
        favorite: false,
        origins:['Italy','India'],
        stars:4.0,
        imageUrl:'assets/food.1.jpg',
        tags:['FastFood','Pizza','Lunch']
    },{
        id:'2',
        name:'Vegetables Burger',
        price:10,
        cookTime:'40-50',
        favorite: false,
        origins:['Italy','India','USA'],
        stars:3.0,
        imageUrl:'assets/food.2.jpg',
        tags:['FastFood','SlowFood','Lunch']
    },{
        id:'3',
        name:'BreakFast',
        price:11,
        cookTime:'40-50',
        favorite: false,
        origins:['Italy'],
        stars:4.2,
        imageUrl:'assets/food.3.jpg',
        tags:['FastFood','Bread','BreakFast']
    },{
        id:'4',
        name:'Pizza',
        price:12,
        cookTime:'40-50',
        favorite: false,
        origins:['India','New-York'],
        stars:4.0,
        imageUrl:'assets/food.4.jpg',
        tags:['JunkFood','Pizza','Lunch']
    },{
        id:'5',
        name:'Noodles',
        price:13,
        cookTime:'40-50',
        favorite: false,
        origins:['Italy','India','China'],
        stars:4.0,
        imageUrl:'assets/food.5.jpg',
        tags:['FastFood','Noodles','Lunch']
    },
]