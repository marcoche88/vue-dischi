/*
Descrizione:
Attraverso una chiamata ajax all’API di boolean:
https://flynn.boolean.careers/exercises/api/array/music
avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS:
- Ordinare i dischi per anno di uscita.
- Creare una select con tutti i generi dei dischi.
  In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
*/


Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    discs: [],
  },
  computed: {
    sortedDiscs() {
      return this.discs.sort((a, b) => { return a.year - b.year });
    },
  },
  methods: {},
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.discs = res.data.response;
      });
  },
});
