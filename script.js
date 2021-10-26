var app = new Vue({
    el: "#data" ,
    data: {
        greeting: "Good Morning",
        names: [
            'Mary',
            'Omolade',
            'Moyinoluwa',
            'Oluwatimileyin',  
            'Ibukun',
            'Temitope', 
            'Miracle', 
            'Olajuwon', 
            'Fatomi'
        ],
        name:'Joy',
        message: 'Welcome to Vue Class!'
    },
    mounted() {
        // alert('Welcome to Enyata Academy')
        this.greet();
    },
    methods: {
        greet() {
            this.greeting = "HEY, SACK OLE!"
        },
        reverseMessage() {
            this.message = this.message.split(" ").reverse().join(" ");
        }
    }
})