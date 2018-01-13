<template>
    <div id="map">
    </div>
</template>
<script>
    export default {
        props:["selectedStation"],
        data () {
            return {
                lat: 0,
                lon: 0,
            }
        },
        methods: {
            initMap: function () {
                this.lat = this.selectedStation["lat"];
                this.lon = this.selectedStation["lon"];
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
        updated () {
            this.initMap()
        },
    }
</script>