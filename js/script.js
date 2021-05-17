var root = new Vue(

    {
        el:"#root",
        data: {
            message: 'This is a title',
            imageMount: null,
            imageSea: null
        },
        methods: {
            getMount() {
                if (this.imageMount == null) {
                this.imageMount = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80' 
                } else {
                    this.imageMount = null
                }
            },
            getSea() {
                if (this.imageSea == null) {
                    this.imageSea = 'https://images.unsplash.com/photo-1564419429381-98dbcf916478?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8c2VhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                } else {
                    this.imageSea = null
                }
            }
        }
    }   
)
