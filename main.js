var app = new Vue (
    {
        el: '#root',
        data: {
            newMessage:'',
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
                        },
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
            //imposto un valore di partenza per stabilire il contatto attivo da far scorrere nel v-for
            contactActive: 0,
            newResearch: ''
        },

        methods: {
                //imposto una funzione che attiverò al click del nuovo contatto
                //creo un parametro per la posizione del contatto
                ChangeContact(indice_contatto) {
                    //assegno al parametro la posizione corrente del contatto, passandolo poi alla funzione
                    this.contactActive = indice_contatto;
                },
                //creo una funzione uguale al SendMessage, inserendo i dati e portandoli all'interno del timeout
                ReceivedMessage() {
                    let messageReceived = {
                        message: 'ok',
                        status: 'received'
                    }
                    this.contacts[this.contactActive].messages.push(messageReceived);
                },
                //creo una funzione da attivare al click del pulsante 'invia'
                SendMessage() {
                    //creo una variabile che avrà contenuto dinamico(let) e gli assegno la creazione di un nuovo oggetto
                    let messageWrote = {
                        //nella chiave message passo il valore di newMessage modificato con il v-model dell'input
                        message: this.newMessage,
                        //dato che i messaggi saranno inviati dall'utente li imposto per la parte sinistra assegnando status: sent
                        status: 'sent',
                    }
                    //prendo l'array corrente pushando il messaggio e lo status come fatto per gli obj precedenti
                    this.contacts[this.contactActive].messages.push(messageWrote);
                    //pulisco l'input
                    this.newMessage = '';
                    //imposto il set timeout che avvierà il receivedmessage dopo 1 secondo
                    setTimeout(this.ReceivedMessage, 1000);
                },

                SearchContact() {
                    this.contacts.forEach((element, index) => {
                        if (element[index].name.includes(this.newResearch)) {
                            this.visible = true;
                        }
                        else {
                            this.visible = false;
                        }
                    });
                }
            }
        })
