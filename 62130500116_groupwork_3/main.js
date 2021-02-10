const app = {
    data() {
        return {
            task: 'Learing INT203 Client-side Web Programming 2',
            done: true,
            progress: 10,
            users: [{username: "lnwza007",pic: './images/1.jpg',profile: './images/1.jpg',like:false,count:279},
                     {username: "lalala_mc",pic: './images/2.jpg',profile: './images/2.jpg',like:false,count:1708},
                     {username: "Sylvia.silom",pic: './images/3.jpg',profile: './images/3.jpg',like:false,count:340}]
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
        }
    },
    computed: {
        countLike(){
            return this.users.filter( i => i.like ).length
        },
        countPic(){
            return this.users.filter( i => i).length
        }
    }
    

}
mountedApp = Vue.createApp(app).mount('#app')