
new Vue({
    el:"#app",
    data:{
        name: 'Jahirul Islam Razu',
        isTrue: true,
        language: ['JavaScript','PHP','Python'],
        src: 'https://picsum.photos/200/300',
        alt: 'This is a Image',
        frameWork:{
            JavaScript: 'vue'
        },
        getFunction: ()=> {
            return 'Hello Vue';
        }
    },
    methods: {
        getValue(){
            return this.name
        }
    }
})