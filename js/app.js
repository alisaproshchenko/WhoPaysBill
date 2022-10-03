const app = Vue.createApp({
    data(){
        return {
            formData:{
                name:''
            },
            error_mes: '',
            names: [],
            looser: ''
        }
    },
    methods:{
        addName(){
            if(!this.formData.name) {
                this.error_mes = 'You cannot put empty name!';
                return;
            }
            
            if(this.names.includes(this.formData.name)){
                this.error_mes = 'There`s an existing name already in list!';
                return;
            }

            this.error_mes = '';
            this.names.push(this.formData.name);
            this.formData.name = '';
        },
        chooseLooser(){
            const index = Math.floor(Math.random() * this.names.length);
            this.looser = this.names[index];
        },
        getAnotherName(){
            const clearArray = this.names.filter(x => x !== this.looser);
            const index = Math.floor(Math.random() * clearArray.length);
            this.looser = clearArray[index];
        },
        startOver(){
            this.looser = '';
            this.names = [];
        },
        removeName(name){
            this.names = this.names.filter(x => x !== name);
        }
    }
}).mount('#app');