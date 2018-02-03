<template>
<div class="container-fluid"id="app">
  <div class="jumbotron">
    <h1>BikeWhere<br><small>Can you get there?</small></h1>
    <h3>An app to help you navigate through the Toronto Bikeshare system where you need it, when you need it.</h3>
    <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/intro.html">Introduction</a>
          <a class="nav-item nav-link" href="/install2.html">Installation</a>
          <a class="nav-item nav-link" href="/howto3.html">Tutorial</a>        
          <a class="nav-item nav-link active" href="#">BikeWhere<span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/conclusion5.html">Conclusion</a>
          <a class="nav-item nav-link" href="/reference6.html">References</a>
        </div>
      </div>
    </nav>
  </div>
<!--   <ul class="nav nav-tabs">
    <li class="nav-item nav-fill">
      <a class="nav-link" href="/intro.html">Introduction</a>
    </li>
    <li class="nav-item nav-fill">
      <a class="nav-link" href="/install2.html">Installation</a>
    </li>
    <li class="nav-item nav-fill">
      <a class="nav-link" href="/howto3.html">Tutorial</a>
    </li>
    <li class="nav-item nav-fill">
      <a class="nav-link active" href="#">BikeWhere</a>
    </li>
    <li class="nav-item nav-fill">
      <a class="nav-link" href="/conclusion5.html">Conclusion</a>
    </li>
    <li class="nav-item nav-fill">
      <a class="nav-link" href="/reference6.html">References</a>
    </li>
  </ul> -->
  <Station v-on:update="updateMessage"/>
  <div class="container center-block panel">
      <div class="text-left text-info col-lg-12 panel-heading">
          <h2 style="">
              {{message}}
          </h2>
      </div>
  </div>
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
