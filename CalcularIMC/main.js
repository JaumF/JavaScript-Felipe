function calcularIMC(peso, altura) {
    if (altura === 0) {
        return 'Altura não pode ser zero';
    }
    return (peso / (altura * altura)).toFixed(2);
}

function mostrarResultado() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value) / 100; // Convertendo altura para metros

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = calcularIMC(peso, altura);

    // Redireciona para a página de resultados com o IMC como parâmetro
    window.location.href = `resultado.html?imc=${imc}`;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarResultado();
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    document.getElementById('resultado').textContent = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
});
