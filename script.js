const btn = document.getElementById("colorChangeBackgroundBtn");

// Logic for Random Color
        const randomColor = () => {
            let values = "0123456789ABCDEF";
            let cons = "#";
            for(let i = 0; i < 6; i++){
                cons = cons + values[Math.floor(Math.random() * 16)];
            }
            return cons;
        };

        function changeRandomColor(){
            document.body.style.backgroundColor = randomColor();
        }

        btn.addEventListener("click", changeRandomColor);