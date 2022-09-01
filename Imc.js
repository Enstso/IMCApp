var taille = document.getElementById('taille');
var poids = document.getElementById('poids');
var taille_value = 0;
var poids_value = 0;
var res=0;
document.getElementById('txt-imc').classList.add('red');
document.getElementById('button').addEventListener('click',function(event){
    event.preventDefault();
    taille_value = taille.value;
    poids_value = poids.value;
    res = (poids_value / (taille_value * taille_value))*10000;
    res = (~~res);
    document.getElementById('imc').innerText = "IMC : " + (res);
    
    if(res<18.5){
        document.getElementById('txt-imc').innerText = 'Insuffisance pondérale (maigreur)';
        
    }
    else if (res>=18.5 && res<25) {
        document.getElementById('txt-imc').classList.replace('red','green')
        document.getElementById('txt-imc').innerText = 'Corpulence normal';

    }

    else if(res>=25 && res<30){
        document.getElementById('txt-imc').innerText = 'Surpoids';

    }
    
    else if( res>=30 && res<35){
        document.getElementById('txt-imc').innerText = 'Obésité modérée';

    }

    else if(res>=35 && res < 40){
        document.getElementById('txt-imc').innerText = 'Obésité sévère';

    }

    else{
        document.getElementById('txt-imc').innerText = 'Obésité morbide';

    }

})