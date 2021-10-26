let app = new Vue ({
    el: '#app',
    data: {
        personalInfo: {
        firstName: 'Oluwatimileyin',
        lastName: 'Akinpelu',
        address: '343 Price St, Statham, Georgia(GA), 30666',
        occupation: 'Software developer'
        },
        formData: {
            userName: '',
            phoneNumber:'',
            email:''
        },
        favouriteFoods: [
            'Ewa Agoyin and beans',
            'Firewood Jollof rice with goat meat',
            'Barbecue chicken and fries',
            'Ofada rice, with peppered ponmo and asun'
        ],
        favouriteCountries: [
            'Germany',
            'United Kingdom',
            'Ireland',
            'Norway'
        ],
        tableData: [],
        foodVisibility:'',
        countryVisibility:'',
        currentTime: new Date().getHours(),
        greeting: ''
    },
    methods: {
        submit() {
            this.tableData.push(this.formData)
            console.log(this.tableData)
        },
        showFoods() {
         this.foodVisibility= true;
        },
        showCountries() {
            this.countryVisibility= true;
        },
        getTime() {
            if (currentTime < 12) {
                greeting = 'Good morning';
            }
            else if (currentTime < 17) {
                greeting = 'Good afternoon'
            }
            else {
                greeting = 'Good evening Visitor'
            }
        }
    },
})