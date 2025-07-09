//Additional activity
function changeImage() {
            const newImageUrl = prompt("Enter image URL:");
            const image = document.getElementById("image");
            if (newImageUrl) {
                image.src = newImageUrl;
            }
              }
//Main Activity
        function applyChanges() {
            const borderColor = document.getElementById("borderColor").value;
            const borderWidth = document.getElementById("borderWidth").value;
          //Additional activity- start
            const borderType=prompt("Which type of border (dotted,dashed,solid,double,ridge) do you want to apply?")
            //Additiona activity- end
            const image = document.getElementById("image");
            image.style.borderColor = borderColor;
            image.style.borderWidth = `${borderWidth}px`;
            image.style.borderStyle = borderType;
        }