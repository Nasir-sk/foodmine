
export const sample_foods: any[]=[
    {
        id:'1',
        name:'Burger',
        price:9,
        cookTime:'40-50',
        favorite: false,
        origins:['Italy','India'],
        stars:3.5,
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
        stars:4.5,
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
        stars:2.5,
        imageUrl:'assets/food.5.jpg',
        tags:['FastFood','Noodles','Lunch']
    },
]

export const sample_tags : any[] = [
    {name:'All', count:6},
    {name:'FastFood', count:4},
    {name:'Lunch', count:2},
    {name:'SlowFood', count:3},
    {name:'Humberger', count:2},
    {name:'Fry', count:1},
    {name:'Soup', count:1},
    {name:'Pizza', count:1},
]

export const sample_users: any[] =[
    {
        name: "Nasser",
        email: "nasser@gmail.com",
        password: "123nasser",
        address: "Toronto ons",
        isAdmin: true
    },
    {
        name: "Naser",
        email: "naser@gmail.com",
        password: "123naser",
        address: "Toronto on",
        isAdmin: false
    }
]