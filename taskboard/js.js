let boardData = [];

        //если что то было сохранрено то читаем оттуда
        if (localStorage.getItem("data") != null) {
            boardData = JSON.parse(localStorage.getItem("data"));
        }

        let board = Vue.createApp({
            data() {
                return {
                    visible : false,
                    modalTitle : "",
                    modalDescription : "",
                    currentCard : null,
                    boardData : boardData
                }
            },
            methods : {
                addCard(column){
                    column.cards.push(
                        {
                            title: "",
                            description: ""
                        }
                    )
                },
                deleteCard(column, card){
                    //определяем номер карточки которую хотим удалить
                    let number = column.cards.indexOf(card)

                    //вырезаем элемент из массива
                    column.cards.splice(number,1);

                    //сохраняем изменения
                    this.saveBoard();
                },
                addColumn(){
                    this.boardData.push(
                        {
                            name: "новая",
                            cards: []
                        }
                    )
                },
                deleteColumn(column){
                    //определяем номер карточки которую хотим удалить
                    let number = this.boardData.indexOf(column)

                    //вырезаем элемент из массива
                    this.boardData.splice(number,1);

                    //сохраняем изменения
                    this.saveBoard();    
                },
                openModal(card){//меняем видимость вестки модалки
                    this.visible = true

                    //заполняем модалку данными из карточки
                    this.modalTitle = card.title;
                    this.modalDescription = card.description;
                    this.currentCard = card;

                },
                closeModal(){

                    //меняем видимость вестки модалки
                    this.visible = false;

                    //записываем данные в карточку
                    this.currentCard.title = this.modalTitle;
                    this.currentCard.description = this.modalDescription;

                    //сохраняем изменения 
                    this.saveBoard()

                },
                saveBoard() {

                    //превращаем данные в json чтобы положить в хранилище
                    let json = JSON.stringify(this.boardData);

                    //кладем данные о доске в хранилище
                    localStorage.setItem("data",json);

                    console.log(localStorage.getItem("data"));
                }
            }
        });

        board.mount("#board");