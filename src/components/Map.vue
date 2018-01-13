<template>
    <div id="map">
    </div>
</template>
<script>
    export default {
        props:["selectedStation"],
        data () {
            return {
                lat: 43.6570321,
                lon: -79.6010421,
            }
        },
        methods: {
            initMap: function () {
                if (selectedStation) {
                    this.lat = this.selectedStation["lat"];
                    this.lon = this.selectedStation["lon"];
                }
                let location = {"lat": this.lat, "lng": this.lon};
                let map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 15,
                  center: location
                });
                let marker = new google.maps.Marker({
                  position: location,
                  map: map
                });
            }
        },
        mounted () {
            this.initMap()
        },
        updated () {
            this.initMap()
        },
    }
</script>