export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'BUY_ITEM':
            // take away the feature from the store array
            // add it to the features array on the car
            // add the price of the added feature to additionalPrice
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, payload]
                },
                store: state.store.filter(({ id }) => id !== payload.id),
                additionalPrice: state.additionalPrice + payload.price
            };
        case 'REMOVE_FEATURE':
            // take away the feature from the features array on the car
            // add it back to the store array
            // subtract the price of the removed feature from additionalPrice
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(({ id }) => id !== payload.id)
                },
                store: [...state.store, payload],
                additionalPrice: state.additionalPrice - payload.price
            };
        default:
            return state;
    }
};

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};