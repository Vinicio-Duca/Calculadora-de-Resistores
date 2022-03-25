function pegarDados(){
    let priFaixa = document.getElementById('1Faixa').value;
    let segFaixa = document.getElementById('2Faixa').value;
    let terFaixa = document.getElementById('3Faixa').value;
    let quarFaixa = document.getElementById('4Faixa').value;
    let quinFaixa = document.getElementById('5Faixa').value;
    let con = parseFloat ( priFaixa + segFaixa + terFaixa );
    let resultado = con * quarFaixa;
    document.getElementById('resultado').innerHTML = resultado + ' Omhs';
}       