    function sendMessage() {

        let text = $('.textarea').val()

        let response = $.get("https://ironlinks.ru/nordic/group12/chat/save.php?text=" + text);
        
        //console.log(response.responseText)

        $(".textarea").val('')

        getMessages()
    }
    
    function getMessages() {
        let response =  $.get("https://ironlinks.ru/nordic/group12/chat/get.php");

        //console.log(response.responseText);

        let data = JSON.parse(response.responseText)

        let result = data.result;

        //очищаем все старые сообщения и рисуем  заново
        document.querySelector('.inwindow').innerHTML = ' ';

        for (let i = 0; i < result.length; i++) {

            document.querySelector('.inwindow').innerHTML +=`
            <div>
                <div class="message">
                    ${result[i].text}
                </div>
            </div>
        `;
        }
    }