<template>
    <div>
        <select class="input-lg col-lg-offset-1" v-model="selectedStation" @change="getDetail(selectedStation), initMap(selectedStation)">
            <option v-for="station in stationArray" v-bind:value="station">
                {{station["address"]}}
            </option>
        </select>
        <div class="col-lg-offset-1" style="margin-top: 20px">
            <h4 class="panel-info"><strong>Bikes: </strong>{{bikes}}</h4>
            <h4 class="panel-info"><strong>Docks: </strong>{{docks}}</h4>
            <div id=map>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:["stationArray"],
        data () {
            return {
                shortArray: [],
                statusArray: [],
                bikes: 0,
                docks: 0,
                selectedStation: "",
                lat: 0,
                lon: 0,
            }
        },
        watch: {
            'selectedStation': function () {
                this.$emit("update", this.bikes, this.docks)
            }
        },
        methods: {
            // 7164 Ryerson
            // 7246 Trinity Bellwoods
            fetchStatus() {
                fetch("https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status", {
                method: "GET"
              })
                .then(response => response.json())
                .then(json => this.statusArray = json.data.stations)
            },
            getDetail(station) {
                let stn = this.statusArray.filter((status) => status["station_id"] == station["station_id"])[0]
                this.bikes = stn["num_bikes_available"]
                this.docks = stn["num_docks_available"]
            },
            initMap(station) {
                let lat = station["lat"];
                let lon = station["lon"];
                let location = {"lat": lat, "lng": lon};
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
        created () {
            this.fetchStatus()
        },
        updated () {
            this.fetchStatus ()
        },
    }
</script>
<!-- @change="emitDetail(this)" -->