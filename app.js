const App = Vue.createApp({
    data() {
        return {
            firstName: 'Mario',
            lastName: 'Rossi'
        };
    },
    computed: {
        fullName() {
            console.log('Calcolo fullName');
            return `${this.firstName} ${this.lastName}`;
        }
    }
    /* data() {
        return {
            firstName: '',
            lastName: ''
        };
    },
    computed: {
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`.trim();
            },
            set(newValue) {
                const names = newValue.split(' ');
                //? Imposta il nome oppure una stringa vuota se non presente
                this.firstName = names[0] || '';
                //? Imposta il cognome solo se c'è qualcosa dopo il primo spazio
                this.lastName = names.length > 1 ? names.slice(1).join(' ') : '';
            }
        }
    } */
}).mount("#app");

