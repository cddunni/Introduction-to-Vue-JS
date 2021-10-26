const app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                name: 'Boots',
                quantity: 7
            },
            {
                name: 'Tops',
                quantity: 3
            },
            {
                name: 'Shirts',
                quantity: 2
            },
            {
                name: 'Sneakers',
                quantity: 4
            }
        ]
    },
    computed: {
        totalProducts () {
            return this.products.reduce((sum, product) => {
                return sum + product.quantity}, 0)
        }
    }
    // created() {
    //     fetch('https://api.myjson.com/bins/74l63')
    //     .then(response => {response.json()})
    //     .then(json => {
    //         this.products = json.products;
    //     })
    //     console.log(response)
    // }
})