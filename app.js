
new Vue({
    el:"#app",
    data:{
        name: 'Jahirul Islam Razu',
        isTrue: true,
        language: ['JavaScript','PHP','Python'],
        frameWork:{
            JavaScript: 'vue'
        },
        getFunction: ()=> {
            return 'Hello Vue';
        }
    }
})