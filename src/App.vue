<template>
<div class="container"id="app">
  <div class="jumbotron">
    <h1 class="display-4">BikeWhere<br><small>Can you get there?</small></h1>
    <p class="lead">An app to help you navigate through the Toronto Bikeshare system where you need it, when you need it.</p>
    <br>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-controls="navLinks" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navLinks">
          <div class="navbar-nav">
            <a class="nav-item nav-link col-lg-2" href="/intro.html">Introduction</a>
            <a class="nav-item nav-link col-lg-2" href="/install2.html">Installation</a>
            <a class="nav-item nav-link col-lg-2" href="/howto3.html">Tutorial</a>        
            <a class="nav-item nav-link active col-lg-2" href="#">BikeWhere<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link col-lg-2" href="/conclusion5.html">Conclusion</a>
            <a class="nav-item nav-link col-lg-2" href="/reference6.html">References</a>
          </div> 
        </div>
      </nav>
    </div>
    <hr class="my-4">
  </div>

  <Station class="container" v-on:update="updateMessage"/>
  <div class="container center-block panel" id="message">
      <div class="text-center text-info col-lg-12 panel-heading">
          <h2 style="">
              {{message}}
          </h2>
      </div>
  </div>
  <footer class="container-fluid">Copyright &copy; 2018 Irene Poon; Art Design by Lo-Jung Fang</footer>
</div>
</template>

<script>
    import Station from "./components/Station.vue"
    export default {
      name: 'app',
      components: {
        Station
      },
      data () {
        return {
            message: "Choose stations"
        }
      },
      methods: {
        updateMessage: function (bikes, docks) {
          if (bikes == 0 || docks == 0) {
              this.message = "Maybe choose from a nearby station..."
          } else if (bikes == 1) {
              this.message = "Not many bikes left. Gotta hurry up!"
          } else if (docks == 1) {
              this.message = "Hurry and get your butt there!"
          } else {
              this.message = "Let's get going!"
          }
        },
      }
    }
</script>
