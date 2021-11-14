
    class Player {
        constructor (photo,name){

            document.querySelector('.container').innerHTML +=`
            <div class='player'>
            </div>
            `
            this.dom = document.querySelector('.player')

            this.dom.style.backgroundImage = "url('" + photo + "')";

            this.name = name;
            this.photo = photo;

            this.power = 0;
            this.magic = 0;
            this.hp = 0
            this.accuracy = 0;
            this.stamina = 0;

        }

        upgardePower() {
            this.power = this.power + 1;
        }

        upgardeMagic() {
            this.magic = this.magic + 1;
        }

        upgardeHp() {
            this.hp = this.hp + 1;
        }

        upgardeaccuracy() {
            this.accuracy = this.accuracy + 1;
        }

        upgardestamina() {
            this.stamina = this.stamina + 1;
        }

        tellabout() {
            let story = `
            Привет меня зовут ${this.name}
            Я силен на ${this.power}
            Моя магия равна ${this.magic}
            Очки здоровья - ${this.hp}
            Выносливость - ${this.stamina}
            Я хорош в стрельбе на ${this.accuracy} 
            `;

            console.log(story);
        }
    }