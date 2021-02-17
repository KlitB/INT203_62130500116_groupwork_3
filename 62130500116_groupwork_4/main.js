const app = {
    data() {
        return {
            task: 'Learing INT203 Client-side Web Programming 2',
            done: true,
            progress: 10,
            search: '',
            isSearch: false,
            isCarousel:false,
            carouselIndex:0,
            users: [{username: "lnwza007",pic: './images/1.jpg',profile: './images/1.jpg',like:false,count:279,description: 'Snow Flower'},
                     {username: "lalala_mc",pic: './images/2.jpg',profile: './images/2.jpg',like:false,count:1708,description: 'Lost Girl'},
                     {username: "Sylvia.silom",pic: './images/3.jpg',profile: './images/3.jpg',like:false,count:340,description: 'Lonely Mountain'}]
        }
        
    }
    ,
    methods: {
        toggleDone(index){
            // this.users[index].like = !this.users[index].like
            if (this.users[index].like) {
                this.users[index].like = !this.users[index].like
                this.users[index].count -= 1
            }else
            {
                this.users[index].like = !this.users[index].like
                this.users[index].count += 1
            }
        },
        toggleSearch(){
                this.isSearch = !this.isSearch
        },
        carouselLeft(){
            if(this.carouselIndex > 0){
                this.carouselIndex -= 1
            }
            else this.carouselIndex = 2
            console.log(this.carouselIndex);
            console.log(this.users.length);
        },
        carouselRight(){
            if(this.carouselIndex < this.users.length-1){
                this.carouselIndex += 1
            }
            else this.carouselIndex = 0
            console.log(this.carouselIndex);
            console.log(this.users.length);
        },
        toggleCarousel(index){
            this.isCarousel = !this.isCarousel
            this.carouselIndex = index
            console.log(index);
        }
    },
    computed: {
        countLike(){
            return this.users.filter( i => i.like ).length
        },
        countPic(){
            return this.users.filter( i => i).length
        },
        filtered(){
            return this.users.filter(user => {
                return user.description.toLowerCase().includes(this.search.toLowerCase())
            }
            )
        }
    }
    

}
mountedApp = Vue.createApp(app).mount('#app')