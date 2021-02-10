const app = {
    data() {
        return {
            task: 'Learing INT203 Client-side Web Programming 2',
            done: true,
            progress: 10,
            users: [{username: "lnwza007",pic: './images/1.jpg',profile: './images/1.jpg',like:false},
                     {username: "lalala_mc",pic: './images/2.jpg',profile: './images/2.jpg',like:false},
                     {username: "Sylvia.silom",pic: './images/3.jpg',profile: './images/3.jpg',like:false}]
        }
        
    }
    ,
    methods: {
        toggleDone(index){
            this.users[index].like = !this.users[index].like
        }
    },
    computed: {
        countUndone(){
            return this.users.filter( i => i.like ).length
        }
    }
    

}
mountedApp = Vue.createApp(app).mount('#app')