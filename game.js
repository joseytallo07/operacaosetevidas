
const scenes=[
{t:"Prólogo",s:`Uma tempestade atinge Miaulândia. O Gato Assustado desapareceu.
No apartamento dele há uma mensagem: "Pare de investigar."
Você encontra a primeira prova.`,e:"Bilhete Ameaçador"},
{t:"Capítulo 1",s:`Você interroga o Gato Terapeuta.
Ele afirma estar sendo incriminado e entrega registros financeiros.
Algo não bate nas datas.`,e:"Registros Financeiros"},
{t:"Capítulo 2",s:`O Gato Maloqueiro revela que fazia entregas secretas.
Todas terminavam perto da estação abandonada.`,e:"Lista de Entregas"},
{t:"Capítulo 3",s:`Nos correios, o Gato Carteiro menciona um nome proibido:
"Gato Fantasma".
Ele se recusa a falar mais.`,e:"Carta Codificada"},
{t:"Capítulo 4",s:`O Gato Assustado reaparece.
Ele entrega um pendrive contendo conversas entre membros do Clã das Sete Vidas.`,e:"Pendrive"},
{t:"Capítulo 5",s:`A Gata Bibliotecária encontra uma fotografia antiga.
Todos os suspeitos aparecem nela, mas um rosto foi rasgado.`,e:"Fotografia Rasgada"},
{t:"Capítulo 6",s:`O Gato Hacker decifra mensagens.
Surge o Projeto Nona Vida: um plano para controlar a cidade usando chantagem.`,e:"Logs Decifrados"},
{t:"Capítulo 7",s:`Você invade a mansão do Gato Barão.
Há mapas, cofres e uma sala secreta cheia de relatórios.`,e:"Projeto Nona Vida"},
{t:"Reviravolta",s:`O Gato Terapeuta é preso.
Na mesma noite desaparece da cela.
Na parede resta uma frase:
"Ele era inocente."`,e:"Relatório da Fuga"},
{t:"Final",s:`As provas apontam para alguém que manipulava todos sem aparecer.
Agora faça sua acusação.`}
];
let idx=0; let evidence=[];
const title=document.getElementById('title');
const story=document.getElementById('story');
const choices=document.getElementById('choices');
const ev=document.getElementById('evidence');

function draw(){
 title.textContent=scenes[idx].t;
 story.textContent=scenes[idx].s;
 choices.innerHTML='';
 if(idx<scenes.length-1){
   const b=document.createElement('button');
   b.textContent='Continuar investigação';
   b.onclick=()=>{
      if(scenes[idx].e){evidence.push(scenes[idx].e);renderEvidence();}
      idx++; draw();
   };
   choices.appendChild(b);
 }
}
function renderEvidence(){
 ev.innerHTML='';
 evidence.forEach(x=>{
   const li=document.createElement('li');
   li.textContent=x;
   ev.appendChild(li);
 });
}
window.finalAccusation=function(){
 const val=document.getElementById('accuse').value;
 const r=document.getElementById('result');
 if(idx<scenes.length-1){r.innerHTML='Termine a história primeiro.';return;}
 if(val==='Gato Fantasma'){
   r.innerHTML='✅ FINAL VERDADEIRO: O Gato Fantasma manipulava todos. O Terapeuta era um peão. Miaulândia está salva.';
 }else{
   r.innerHTML='❌ FINAL ALTERNATIVO: O verdadeiro líder escapa enquanto você acusa a pessoa errada.';
 }
}
draw();
