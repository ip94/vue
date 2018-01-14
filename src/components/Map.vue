<template>
    <gmap-map 
    :center="center" 
    :zoom="15" 
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
    export default {
        props:["selectedStation"],
        data () {
            return {
                lat: 43.6570321,
                lon: -79.6010421,
                center: {lat: this.lat, lng: this.lon},
                markers: [{
                  position: {lat: this.lat, lng: this.lon}
                }],
            }
        },
        methods: {
            reloadMap () {
                if (this.selectedStation) {
                    this.lat = this.selectedStation["lat"];
                    this.lon = this.selectedStation["lon"];
                }
                this.center.lat = this.markers.position.lat = this.lat;
                this.center.lng = this.markers.position.lng = this.lon;
            }
        },
        updated () {
            this.reloadMap()
        },
    }
</script>