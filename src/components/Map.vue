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
    this.use(VueGoogleMaps, {
        load: {
          key: 'AIzaSyAmwP9rGS2-Db9oSCgfHDIMEhvRDxXRR-Y',
          v: '3',
        }
      });
    export default {
        props:["selectedStation"],
        data () {
            return {
                lat: 43.6570321,
                lon: -79.6010421,
                center: {'lat': lat, 'lng': lon},
                markers: [{
                  position: {'lat': lat, 'lng': lon}
                }],
            }
        },
        methods: {
            reloadMap () {
                if (this.selectedStation) {
                    this.lat = this.selectedStation["lat"];
                    this.lon = this.selectedStation["lon"];
                }
                let location = {'lat': this.lat, 'lng': this.lon};
                this.center = location;
                this.markers.position = location;
            }
        },
        updated () {
            this.reloadMap()
        },
    }
</script>