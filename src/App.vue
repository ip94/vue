<template>
<div class="container" id="app">
    <div class="jumbotron">
        <h1>Bike(whe)re<br><small>Can you get there?</small></h1>
        <h3>An app to help you navigate through the Toronto Bikeshare system where you need it, when you need it.</h3>
    </div>
    <ul class="nav nav-tabs">
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
        <a class="nav-link active" href="#">Bike(whe)re</a>
      </li>
      <li class="nav-item nav-fill">
        <a class="nav-link" href="/conclusion5.html">Conclusion</a>
      </li>
      <li class="nav-item nav-fill">
        <a class="nav-link" href="/reference6.html">References</a>
      </li>
    </ul>
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
