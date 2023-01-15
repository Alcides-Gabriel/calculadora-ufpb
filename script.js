let areaCalculadora = document.querySelector(".area-calculadora");
areaCalculadora.innerHTML =
  "<h3>Calcular a nota pela média</h3><div class='grid-notas-media'><label for='media'>Média</label><input type='text' name='media' id='media'><button class='botao-media' onclick='por_media()'>Calcular</button></div><h3 id='ou'><span class='detalhe-ou'>------</span> Ou <span class='detalhe-ou'>------</span></h3><h3>Calcular a nota com o resultado das três provas</h3><div class='grid-notas'><label for='nota1'>Nota da primeira unidade</label><input type='text' name='nota1' id='nota1'><label for='nota2'>Nota da segunda unidade</label><input type='text' name='nota2' id='nota2'><label for='nota3'>Nota da terceira unidade</label><input type='text' name='nota3' id='nota3'></div><br><p class='verifique'>* Verifique se preencheu as três notas antes de clicar em calcular!</p><button onclick='por_nota()'>Calcular</button>";
// const divResultado = document.querySelector(".resultados");
function por_media() {
  const media = Number(
    document.getElementById("media").value.replace(",", ".")
  );
  if (media >= 0 && media <= 10) {
    if (media >= 4) {
      if (media < 7) {
        const minimo = ((5 - 0.6 * media) / 0.4).toFixed(1);
        const minimo_7 = ((7 - 0.6 * media) / 0.4).toFixed(1);
        if (minimo_7 <= 10) {
          areaCalculadora.innerHTML =
            "<h2>Para passar com média 5,</h2><p class='p-resultado'>você precisa tirar <span id='resultado-final'>...</span> na prova final.</p><h2>Para passar com média 7,</h2><p class='p-resultado'>você precisa tirar <span id='resultado-final-7'>...</span> na prova final.</p><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";

          document.getElementById("resultado-final").innerHTML = minimo;
          document.getElementById("resultado-final-7").innerHTML = minimo_7;
        } else {
          areaCalculadora.innerHTML =
            "<h2>Para passar com média 5,</h2><p class='p-resultado'>você precisa tirar <span id='resultado-final'>...</span> na prova final.<h3>Infelizmente, você não consegue mais passar com 7.</h3><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";

          document.getElementById("resultado-final").innerHTML = minimo;
        }
      } else {
        areaCalculadora.innerHTML =
          "<h2>Você já passou, não precisará fazer a prova final. Parabéns!</h2><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";
      }
    } else {
      areaCalculadora.innerHTML =
        "<h2>Infelizmente você não possui nota suficiente para realizar a prova final.</h2><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";
    }
  } else {
    areaCalculadora.innerHTML =
      "<h2>Insira uma média válida (entre 0 e 10).</h2><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";
  }
}

function por_nota() {
  const nota_1 = Number(
    document.getElementById("nota1").value.replace(",", ".")
  );
  const nota_2 = Number(
    document.getElementById("nota2").value.replace(",", ".")
  );
  const nota_3 = Number(
    document.getElementById("nota3").value.replace(",", ".")
  );
  let checkNota1 = false;
  let checkNota2 = false;
  let checkNota3 = false;
  if (nota_1 >= 0 && nota_1 <= 10) {
    checkNota1 = true;
  }
  if (nota_2 >= 0 && nota_2 <= 10) {
    checkNota2 = true;
  }
  if (nota_3 >= 0 && nota_3 <= 10) {
    checkNota3 = true;
  }
  console.log(checkNota1, checkNota2, checkNota3);
  if (checkNota1 && checkNota2 && checkNota3) {
    const media = ((nota_1 + nota_2 + nota_3) / 3).toFixed(1);
    if (media < 7) {
      const minimo = ((5 - 0.6 * media) / 0.4).toFixed(1);
      const minimo_7 = ((7 - 0.6 * media) / 0.4).toFixed(1);
      if (minimo_7 <= 10) {
        areaCalculadora.innerHTML =
          "<h2 id='mostrar-media'></h2><h2>Para passar com média 5,</h2><p class='p-resultado'>você precisa tirar <span id='resultado-final'>...</span> na prova final.</p><h2>Para passar com média 7,</h2><p class='p-resultado'>você precisa tirar <span id='resultado-final-7'>...</span> na prova final.</p><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";
        document.getElementById("mostrar-media").innerHTML =
          "Sua média é: " + media;
        document.getElementById("resultado-final").innerHTML = minimo;
        document.getElementById("resultado-final-7").innerHTML = minimo_7;
      } else {
        areaCalculadora.innerHTML =
          "<h2 id='mostrar-media'><h2>Para passar com média 5,</h2><p class='p-resultado'>você precisa tirar <span id='resultado-final'>...</span> na prova final.<h3>Infelizmente, você não consegue mais passar com 7.</h3><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";

        document.getElementById("mostrar-media").innerHTML =
          "Sua média é: " + media + ".";
        document.getElementById("resultado-final").innerHTML = minimo;
      }
    } else {
      areaCalculadora.innerHTML =
        "<h2>Você já passou, não precisará fazer a prova final. Parabéns!</h2><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";
    }
  } else {
    areaCalculadora.innerHTML =
      "<h2>Insira valores válidos (entre 0 e 10) no campo das notas.</h2><br><button onclick='calcularOutraVez()'>← Voltar e calcular outra vez</button>";
  }
}

function calcularOutraVez() {
  areaCalculadora.innerHTML =
    "<h3>Calcular a nota pela média</h3><div class='grid-notas-media'><label for='media'>Média</label><input type='text' name='media' id='media'><button class='botao-media' onclick='por_media()'>Calcular</button></div><h3 id='ou'><span class='detalhe-ou'>------</span> Ou <span class='detalhe-ou'>------</span></h3><h3>Calcular a nota com o resultado das três provas</h3><div class='grid-notas'><label for='nota1'>Nota da primeira unidade</label><input type='text' name='nota1' id='nota1'><label for='nota2'>Nota da segunda unidade</label><input type='text' name='nota2' id='nota2'><label for='nota3'>Nota da terceira unidade</label><input type='text' name='nota3' id='nota3'></div><br><p class='verifique'>* Verifique se preencheu as três notas antes de clicar em calcular!</p><button onclick='por_nota()'>Calcular</button>";
}
