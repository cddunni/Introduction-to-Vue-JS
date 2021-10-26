let app = new Vue ({
    el: '#myForm',
    data: {
        formData: {
            firstName: '',
            lastName:'',
            email:''
        },
        tableData: []
    },
    methods: {
        submit() {
            this.tableData.push(this.formData)
            console.log(this.tableData)
        }
    }
})