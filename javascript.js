const form= document.querySelector("form")

form.addEventListener("submit" ,(e) => {
    e.preventDefault();
   
    const height= document.getElementById("height").value;
    const weight= document.getElementById("weight").value;
    const result= document.getElementById("result");
    const comment= document.getElementById("comment");

    
    if(height=== ""|| height<=0 || isNaN(height)){
        result.innerHTML=`please give me a valid ${height}`;
    }
    else if(weight=== ""|| weight<=0 || isNaN(weight)){
        result.innerHTML=`please give me a valid ${weight}`;
    }
    else{
        const bmi =Math.round(weight/((height*height)/10000).toFixed(2));
        result.innerHTML=` result ${bmi}`
        if(bmi<= 18){
            comment.innerHTML =` under weight`;
        }
        else if(bmi >=18 && bmi <=24){
            comment.innerHTML=` normal range `;
        }
        else{
            comment.innerHTML=` overweight`;
        }
    }

   
    
})


    
    

    
