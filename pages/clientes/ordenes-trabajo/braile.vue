<template>
  <div class="py-24">
    <div class="grid grid-cols-2 mx-6 space-x-2">
      <div class="px-4 py-2 border border-black">
        <h2 class="font-semibold text-center">Transcripcion de archivos</h2>
        <p class="mt-4 text-sm">A traves de esta opcion, podra realizar la Transcripcion de textos incluidos en un archivo con las siguientes especificaciones:</p>
        <p class="mt-2 text-sm">1.- Archivo en formato Microsoft Excel, extensión: .XLS</p>
        <p class="mt-2 text-sm">2.- No debe de tener titulos de columnas</p>
        <p class="mt-2 text-sm">3.- El achivo debe de estar conformado por 4 columnas: Texto a transcribir, Largo, Ancho, Alto</p>
        <div class="grid grid-cols-11 mt-2">
          <div class="px-2 text-center "></div>
          <div class="col-span-4 text-center border">A</div>
          <div class="col-span-2 text-center border">B</div>
          <div class="col-span-2 text-center border">C</div>
          <div class="col-span-2 text-center border">D</div>
        </div>
        <div class="grid grid-cols-11">
          <div class="text-left border">1</div>
          <div class="col-span-4 text-left border">Texto a Transcribir</div>
          <div class="col-span-2 text-left border">Largo</div>
          <div class="col-span-2 text-left border">Ancho</div>
          <div class="col-span-2 text-left border">Alto</div>
        </div>
        <div class="mt-4 text-sm">
          <p>Notas: </p>
          <p>1.- Los textos que no puedan ser transcritos aparecerán con un recuadro rojo. <span class="px-2 mx-1 border border-red-700"></span> </p>
          <p>2.- En esta versión de muestra, tiene un maximo de 10 transcripciones y 10 textos por archivo.</p>
          <p>3.- Consideramos todos los textos en mayúscula</p>
          <div class="flex mt-2">
            <p>4.- Convenciones</p>
            <div class="mx-4">
              <p>MC: Cantidad maxima de caracteres por fila</p>
              <p>MF: Numero maximo de filas</p>
            </div>
          </div>    
        </div>
        <div class="flex justify-center mt-4 space-x-6">
          <button class="px-2 font-semibold border border-black">Seleccione archivo</button>
          <p>Ni...do</p>
          <button class="px-2 text-white border rounded-md bg-celeste">Transcribir textos del archivo</button>
        </div>
      </div>
      <div class="px-4 py-2 border border-black">
        <h2 class="mb-4 font-semibold text-center">Transcripcion palabras o frases</h2>
        <label class="font-semibold">Palabra o frase a transcribir</label>
        <input class="w-full px-4 bg-gray-200 border rounded-md focus:outline-none" type="text">
        <p class="mt-2 font-semibold text-center">Dimensiones de la caja</p>
        <div class="items-center">
          <div class="flex justify-center mt-2">
            <label class="w-20">Largo</label>
            <input class="w-40 px-4 bg-gray-200 border rounded-md focus:outline-none" type="text">
          </div>
          <div class="flex justify-center mt-2">
            <label class="w-20">Ancho</label>
            <input class="w-40 px-4 bg-gray-200 border rounded-md focus:outline-none" type="text">
          </div>
          <div class="flex justify-center mt-2">
            <label class="w-20">Alto</label>
            <input class="w-40 px-4 bg-gray-200 border rounded-md focus:outline-none" type="text">
          </div>
        </div>
        <div class="flex justify-end mt-10">
          <button class="px-2 text-white border rounded-md bg-celeste">Transcribir textos del archivo</button>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-2">
      <button class="px-4 text-white bg-green-500 border rounded-md">Enviar transcripción por correo electronico</button>
    </div>
    <div class="mt-2 text-sm border">
      <p class="font-semibold text-center text-white bg-azul">LA CASA 56 DE LA ESQUINA</p>
      <div class="flex">
        <div class="px-4 pt-8 text-center border">
          <p>CARA 1</p>
          <p>MC: 14</p>
          <p>MF: 1</p>
        </div>
        <div class="px-2 text-center">
          <p>L</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>A</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p></p>
          <img class="h-24 mt-6" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>C</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>A</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>S</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>A</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p></p>
          <img class="h-24 mt-6" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p></p>
          <img class="h-24 mt-6" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>5</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>6</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p></p>
          <img class="h-24 mt-6" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>D</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>E</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
      </div>
      <div class="flex">
        <div class="px-4 pt-8 text-center border">
          <p>CARA 2</p>
          <p>MC: 14</p>
          <p>MF: 1</p>
        </div>
        <div class="px-2 text-center">
          <p>L</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>A</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p></p>
          <img class="h-24 mt-6" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>E</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>S</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>Q</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>U</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>I</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>N</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        <div class="px-2 text-center ">
          <p>A</p>
          <img class="h-24" src="/images/carreras/guionBajo.png" alt="">
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>