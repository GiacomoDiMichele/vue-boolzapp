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
                            message: 'Mi piacerebbe ma devo andare a fare la spesa!',
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
                            status: 'sent'
                        },
                        {
                            date: '',
                            message: 'Ottimo domani passo a salutarlo',
                            status: 'received'
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
                    name: 'Mario',
                    avatar: 'img/mario.png',
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
            ],
            newMessage: '',
            contactActive: 0,
        },
        methods: {
            GetMessageClass(index) {
                let thisContact = this.contacts[this.contactActive];
                let messageClass = 'message ' + thisContact.messages[index].status;
                return messageClass;
            }
        }
    }
)
