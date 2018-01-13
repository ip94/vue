<template>
    <div>
        <div class="row">
            <div class="container col-lg-6">
                <h3 class="text-center">From</h3>
                <Card v-bind:stationArray="stationArray" v-on:update="updateBikes"/>
                <!-- v-on shorthand = @ -->
            </div>
            <div class="container col-lg-6">
                <h3 class="text-center">To</h3>
                <Card v-bind:stationArray="stationArray" v-on:update="updateDocks"/>
            </div>
        </div>
    </div>

</template>

<script>
    import Card from './Card.vue'
    export default {
        components: {
        Card
        },
        data () {
            return {
                stationArray: [],
                bikesFrom: 0,
                docksTo: 0,
            }
        },
        watch: {
            'bikesFrom': function () {
                this.$emit("update", this.bikesFrom, this.docksTo)
            },
            'docksTo': function () {
                this.$emit("update", this.bikesFrom, this.docksTo)
            }
        },
        methods: {
            fetchStationNames() {
              fetch("https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information", {
                method: "GET"
              })
                .then(response => response.json())
                .then(json => this.stationArray = json.data.stations)
            },
            updateBikes (a,b) {
                this.bikesFrom = a
            },
            updateDocks (a,b) {
                this.docksTo = b
            },

        },
        created () {
            this.fetchStationNames()
        },
        components: {
            Card
        }
    }
</script>