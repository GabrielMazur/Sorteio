let amigos = [];

        // Ao clicar em "Adicionar"
        document.getElementById("btnAdicionar").onclick = function() {
            let nome = document.getElementById("amigo").value.trim();
            if (nome) {
                amigos.push(nome);
                document.getElementById("amigo").value = "";

                document.getElementById("listaAmigos").innerHTML = "";
                for (let i = 0; i < amigos.length; i++) {
                    document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
                }
            }
        }

        document.getElementById('sortear').onclick = function(){
            let sorteado = compras[Math.floor(Math.random() * compras.length)];
            document.getElementById('lista2').innerHTML = `<li>O sorteado é : ${sorteado}</li>`
        }