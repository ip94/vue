<template>
    <div>
        <select class="input-lg col-lg-offset-1" v-model="selectedStation" @change="getDetail(selectedStation), loadMap(selectedStation)">
            <option v-for="station in stationArray" v-bind:value="station">
                {{station["address"]}}
            </option>
        </select>
        <div class="col-lg-offset-1" style="margin-top: 20px">
            <h4 class="panel-info"><strong>Bikes: </strong>{{bikes}}</h4>
            <h4 class="panel-info"><strong>Docks: </strong>{{docks}}</h4>
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
                center: {lat: 43.6570321, lng: -79.6010421},
                markers: [{
                  position: {lat: 43.6570321, lng: -79.6010421}
                }],
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
            loadMap (station) {
                let location = {lat: station["lat"], lng: station["lon"]}
                this.center = this.markers[0]['position'] = location
            }
            // callUpdate(station) {
            //     getDetail(station)
            //     initMap(station)
            // }
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