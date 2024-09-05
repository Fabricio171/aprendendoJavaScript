const lampada = document.getElementById("lampada");

let lampadaQuebrada = false;

function lampadaAcesa ()
{
   if (!lampadaQuebrada)
   {
      lampada.src = "lampada-acesa.jpg";
   }
}
function lampadaDesligada()
{
   if (!lampadaQuebrada)
   {
      lampada.src = "lampada-apagada.jpg";
   }
}
function lampadaBroken ()
{
   lampada.src = "lampada-quebrada.jpg";
   lampadaQuebrada = true;
}
lampada.addEventListener('mouseout', lampadaDesligada); 
lampada.addEventListener('mouseover', lampadaAcesa);
lampada.addEventListener('click', lampadaBroken);