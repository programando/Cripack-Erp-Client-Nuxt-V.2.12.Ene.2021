<template>
  <div>
    <input type="checkbox" id="check" />
    <!--header area start-->
    <header class="px-10 py-4 border bg-azul">
      <label for="check">
        <i
          class="px-4 py-1 opacity-0 sm:opacity-100 fa fa-bars"
          id="sidebar_btn"
        ></i>
      </label>
      <div class="left_area">
        <h3>Cripack</h3>
      </div>
      <div class="right_area">
        <a
          href="#"
          class="px-4 py-2 text-lg font-bold bg-blue-500 hover:bg-blue-700 logout_btn"
          >Logout</a
        >
      </div>
    </header>

    <!--mobile navigation bar end-->
    <!--sidebar start-->
    <div class="border-b border-r sidebar">
      <div class="profile_info">
        <img src="/images/1.svg" class="profile_image" alt="" />
        <h4 class="text-lg text-gray-700">User</h4>
      </div>
      
      <a class="ml-4 text-lg text-gray-700" href="#"
        ><i class="fa fa-desktop"></i><span>Dashboard</span></a
      >
      <a class="ml-4 text-lg text-gray-700" href="#"
        ><i class="fa fa-cogs"></i><span>Components</span></a
      >
      <a class="ml-4 text-lg text-gray-700" href="#"
        ><i class="fa fa-table"></i><span>Tables</span></a
      >
      <a class="ml-4 text-lg text-gray-700" href="#"
        ><i class="fa fa-th"></i><span>Forms</span></a
      >
      <a class="ml-4 text-lg text-gray-700" href="#"
        ><i class="fa fa-info-circle"></i><span>About</span></a
      >
      <a class="ml-4 text-lg text-gray-700" href="#"
        ><i class="fa fa-sliders-h"></i><span>Settings</span></a
      >
    </div>
    <!--sidebar end-->

    <!-- content -->
    <div class="content">
      <div class="grid gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-verde"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas de Hoy</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$6547</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/diagrama.svg" alt="" />
          </div>
        </div>
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-rojo"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas de la Semana</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$30056</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/ventas.svg" alt="" />
          </div>
        </div>
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-amarillo"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas del Mes</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$120056</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/analitica.svg" alt="" />
          </div>
        </div>
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-verde"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas del Año</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$1530056</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/rama.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="grid gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-verde"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas de Hoy</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$6547</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/diagrama.svg" alt="" />
          </div>
        </div>
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-rojo"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas de la Semana</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$30056</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/ventas.svg" alt="" />
          </div>
        </div>
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-amarillo"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas del Mes</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$120056</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/analitica.svg" alt="" />
          </div>
        </div>
        <div
          class="flex justify-around px-4 py-2 mx-2 border rounded-lg bg-verde"
        >
          <div class="my-6 ml-4 ">
            <h2 class="text-lg font-bold text-white md:text-2xl">Ventas del Año</h2>
            <p class="mt-4 text-xl font-semibold text-white md:text-3xl">$1500056</p>
          </div>
          <div class="py-6">
            <img class="h-24" src="/images/rama.svg" alt="" />
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

header {
  z-index: 10;
  position: fixed;
  width: calc(100% - 0%);
  top: 0;
}

.left_area h3 {
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
}

.left_area span {
  color: #19b3d3;
}

.logout_btn {
  float: right;
  margin-top: -30px;
  margin-right: 40px;
  border-radius: 2px;
  color: #fff;
  transition: 0.5s;
  transition-property: background;
}

.sidebar {
  z-index: 1;
  top: 0;
  margin-top: 72px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: calc(100% - 9%);
  transition: 0.5s;
  transition-property: left;
  overflow-y: auto;
}

.profile_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar .profile_info .profile_image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebar .profile_info h4 {
  margin-top: 0;
  margin-bottom: 20px;
}

.sidebar a {
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.sidebar a:hover {
  background: #19b3d3;
}

.sidebar i {
  padding-right: 10px;
}

label #sidebar_btn {
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 20px;
  margin: 5px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover {
}

#check:checked ~ .sidebar {
  left: -185px;
}

#check:checked ~ .sidebar a span {
  display: none;
}

#check:checked ~ .sidebar a {
  font-size: 20px;
  margin-left: 165px;
  width: 100%;
}

.content {
  width: (100% - 250px);
  margin-top: 60px;
  padding: 20px;
  margin-left: 250px;
  height: 100vh;
  transition: 0.5s;
}

#check:checked ~ .content {
  margin-left: 60px;
}

#check:checked ~ .sidebar .profile_info {
  display: none;
}

#check {
  display: none;
}

/* Responsive CSS */
@media screen and (max-width: 640px) {
  .sidebar {
    left: -185px;
  }

  .sidebar a span {
    display: none;
  }

  .sidebar a {
    font-size: 20px;
    margin-left: 165px;
    width: 100%;
  }

  .content {
    margin-left: 60px;
  }

  .sidebar .profile_info {
    display: none;
  }
}
</style>