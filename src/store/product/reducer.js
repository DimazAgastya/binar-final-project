const initialState = [
              {
                 "id":1,
                 "user_id":1,
                 "name":"product 1",
                 "price":100,
                 "description":"description 1",
                 "status":"available",
                 "product_pict":[
                    "pict 1",
                    "pict 2"
                 ],
                 "createdAt":"2022-07-01T13:44:28.305Z",
                 "updatedAt":"2022-07-01T13:44:28.305Z",
                 "product_tags":[
                    {
                       "category_id":1,
                       "category_name":"Hobi"
                    },
                    {
                       "category_id":3,
                       "category_name":"Baju"
                    }
                 ]
              },
              {
                 "id":2,
                 "user_id":2,
                 "name":"product 2",
                 "price":200,
                 "description":"description 2",
                 "status":"available",
                 "product_pict":[
                    "pict 2",
                    "pict 3"
                 ],
                 "createdAt":"2022-07-01T13:44:28.305Z",
                 "updatedAt":"2022-07-01T13:44:28.305Z",
                 "product_tags":[
                    {
                       "category_id":2,
                       "category_name":"Kendaraan"
                    }
                 ]
              }
]

const reducer = (state = [], action) => {
    switch(action.type) {
        case 'populateProducts':
            const newState = [...action.payload.products]
            return newState
        default:
            
    }
    return state
}

export default reducer;