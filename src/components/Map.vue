<template>
    <gmap-map 
    :center="center" 
    :zoom="7" 
    style="width: 500px; height: 300px"
    >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position">
        </gmap-marker>
  </gmap-map>
</template>
<script>
    import * as VueGoogleMaps from 'vue2-google-maps';
    // import Vue from 'vue';
    Vue.use(VueGoogleMaps, {
        load: {
          key: 'AIzaSyAmwP9rGS2-Db9oSCgfHDIMEhvRDxXRR-Y',
        }
      });
    export default {
        props:["selectedStation"],
        data () {
            return {
                lat: 43.6570321,
                lon: -79.6010421,
                center: {"lat": lat, "lng": lon},
                markers: [{
                  position: {"lat": lat, "lng": lon}
                ]
                zoom: 15,
            }
        },
        methods: {
            initMap () {
                if (this.selectedStation) {
                    this.lat = this.selectedStation["lat"];
                    this.lon = this.selectedStation["lon"];
                }
                let location = {"lat": this.lat, "lng": this.lon};
            }
        },
        updated () {
            this.initMap()
        },
    }
</script>