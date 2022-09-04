let candidatos = [
    {
        id: 1,
        foto: 'https://1.bp.blogspot.com/-DO4VzpqzlRw/Xg5hz36wGGI/AAAAAAAAWL0/y7_spVZZcFMm3YQczJnnXEzPxVO2LWGjQCLcBGAsYHQ/s1600/Blog%2BNovidades%2BOnLine%2B-%2Bassets_fotos_810_matheus-nachtergaele-joao-grilo-me-ensinou-a-ser-feliz-na-tristeza-a-rir-nas-horas-mais-perigosas-e-desgracadas-da-vida-c6131d45e889.jpg',
        name: 'João Grilo',
        numero: '1892',
        votos: 0
    },
    {
        id: 2,
        foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-OjnUdrOst54%2FU6tAg2OlycI%2FAAAAAAAAABE%2FTY7aMQLmHZw%2Fs1600%2Fagostinho.jpg&f=1&nofb=1',
        name: 'Augustinho Carrara',
        numero: '1895',
        votos: 0
    },
    {
        id: 3,
        foto: `./img/default.svg`,
        name: 'Branco/nulo',
        numero: '0000',
        votos: 0
    },
]

let numeroCandidato = [];
let mostrarNumero = '';

function capturaNumeroCandidato(numero){
    numeroCandidato.push(numero)
    mostrarNumero =  numeroCandidato.join('')
    document.getElementById('numero-candidato').innerHTML = mostrarNumero;

    if(mostrarNumero.length == 4){
        candidatos.forEach(candidato => {
            if(candidato.numero === mostrarNumero){
                let img = document.getElementById('foto-candidato')
                img.src = `${candidato.foto}`
                document.getElementById('nome-candidato').innerHTML = candidato.name;
            }
        });
    }
}

function corrigeNumeroCandidato(){
    for(let i = -2; i <= numeroCandidato.length; i++){
        globalThis.numeroCandidato = numeroCandidato.pop();
        let img = document.getElementById('foto-candidato')
        img.src = `./img/default.svg`
        document.getElementById('numero-candidato').innerHTML = '';
        document.getElementById('nome-candidato').innerHTML = '';
    }
}

function branco(){
    let nullVote = 0
    for(let i = 0; i <= 3; i++){
        capturaNumeroCandidato(nullVote)
    }
}

function confirmaCandidato(){
    if(numeroCandidato.length === 4){
        candidatos.forEach(candidato => {
            if(candidato.numero === mostrarNumero){
                let voto = candidato.votos
                voto = voto + 1;
                candidato.votos = voto
                alert("Voto computado!")
                corrigeNumeroCandidato()
                resgataTodosCandidatos()
            }
        })
    }
}
function resgataTodosCandidatos(){
    let votosGrilo = candidatos[0].votos;
    document.getElementById('qtdVotosGrilo').innerHTML = votosGrilo

    let votosCarrara = candidatos[1].votos;
    document.getElementById('qtdVotosCarrara').innerHTML = votosCarrara

    let votosBrancos = candidatos[2].votos;
    document.getElementById('qtdVotosBrancos').innerHTML = votosBrancos
}

function goTo(){
    window.location.href = "votacao.html";
}