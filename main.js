var app = new Vue (
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Alberto',
                    avatar: 'img/alberto.png',
                    visible: true,
                    messages: [
                        {
                            date: '',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'Ricordati di dargli a mangiare',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Chiara',
                    avatar: 'img/chiara.png',
                    visible: true,
                    messages: [
                        {
                            date: '',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'bene grazie, stasera usciamo?',
                            status: 'received'
                        },
                        {
                            date: '',
                            message: 'Mi piacerebbe ma devo andare a cena con i parenti!',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Francesca',
                    avatar: 'img/francesca.png',
                    visible: true,
                    messages: [
                        {
                            date: '',
                            message: 'Come sta marco?',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'meglio non ha più la febbre',
                            status: 'received'
                        },
                        {
                            date: '',
                            message: 'Ottimo domani passo a salutarlo',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Francesco',
                    avatar: 'img/francesco.png',
                    visible: true,
                    messages: [
                        {
                            date: '',
                            message: 'Questa sera passa dal macellaio',
                            status: 'received'
                        },
                        {
                            date: '',
                            message: 'non ho soldi dietro',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'passa dalla nonna e fatti dare 10 euro',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mario',
                    avatar: 'img/mario.png',
                    visible: true,
                    messages: [
                        {
                            date: '',
                            message: 'hai studiato inglese?',
                            status: 'received'
                        },
                        {
                            date: '',
                            message: 'No sono fuori adesso',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'studia, domani ti interroga',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Chiara',
                    avatar: 'img/chiara.png',
                    visible: true,
                    messages: [
                        {
                            date: '',
                            message: 'Oggi non vengo piu',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'ho da fare',
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'ok no problem, avviso marco',
                            status: 'received'
                        }
                    ]
                },
            ],

            newStatus:'sent',
            newMessage:'',
            contactActive: 0,
        },
        methods: {
            GetMessageClass(index) {
                let thisContact = this.contacts[this.contactActive];
                let messageClass = 'message ' + thisContact.messages[index].status;
                return messageClass;
            },
            ChangeContact(indice_contatto) {
                this.contactActive = indice_contatto;
            },
            SendMessage() {
                this.contacts[0].messages.push(this.newMessage)
                this.contacts[0].messages.push(this.newStatus)
            }

        }
    }
)
