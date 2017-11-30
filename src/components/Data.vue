<template>
    <div class="col-md-4">
        <select v-model="selectedStation" @change="getDetail(selectedStation)">
            <option v-for="key in shortArray" value="shortArray[key]">
                {{key}}
            </option>
        </select>
        <div class="station-card"> <!-- new class "station" -->
            <div class="card-block" onchange="emitDetail(this)">
              <h4 class="card-title">{{selectedStation.address}}</h4>
              <div>
                  <p><strong>Bikes: </strong>{{bikes}}</p>
                  <p><strong>Docks: </strong>{{docks}}</p>
              </div>
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
            }
        },
        methods: {
            // 7164 Ryerson
            // 7246 Trinity Bellwoods
            collectDetail(){
                var index = 0
                var key = ''
                var value = 0
                while (index < stationArray.length) {
                    key = stationArray[index].address
                    value = stationArray[index].station_id
                    this.shortArray.key = value
                }
            }
            fetchStatus() {
                fetch("https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status", {
                method: "GET"
              })
                .then(response => response.json())
                .then(json => this.statusArray = json.data.stations)
            },
            getDetail(station) {
                stn = this.statusArray.filter((status) => status.station_id == station)
                this.bikes = stn.num_bikes_available
                this.docks = stn.num_docks_available
            },
            emitDetail() {
                this.$emit("update", this.bikes, this.docks)
            }
        },
        created () {
            this.collectDetail()
        },
    }
</script>