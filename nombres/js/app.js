document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
function cargarNombres(e){
     e.preventDefault();
     const origen = document.getElementById('origen');
     const OrigenSelected = origen.options[origen.selectedIndex].value;
     const genero = document.getElementById('genero');
     const generoSelected = genero.options[genero.selectedIndex].value;
     const cantidad = document.getElementById('numero').value;
     let url = '';
     url += 'https://randomuser.me/api?';
     if(OrigenSelected !== ''){
          url += `nat=${OrigenSelected}&`;
     }
     if(generoSelected !== ''){
          url += `gender=${generoSelected}&`;
     }
     if(cantidad !== ''){
          url += `results=${cantidad}&`;
     }
     //conectar con AJAX
     //Iniciar XHLMHttprequest
     const xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);
     xhr.onload = function(){
          if(this.status === 200){
               const nombres = JSON.parse(this.responseText).results;
               let HTMLNombres = '<h2>Nombres Generados</h2>';
               HTMLNombres += '<ul class="lista">';

               nombres.forEach(nombre => {
                    HTMLNombres += `  
                        <li>${nombre.name.first}</li>
                    `;
                });

               HTMLNombres += '</ul>';
               document.getElementById('resultado').innerHTML = HTMLNombres;
          }
     }
     xhr.send()
};