<template>
  <div id="app">
    <!-- <p>Position of 'three': {{ threePosition }}</p>
    <p>Cached: {{ threePosition }}</p>
     -->
    <!-- <p>Position of 'three': {{ getThreePosition() }}</p>
    <p>Cached: {{ getThreePosition() }}</p> -->


    <!-- directives -->
    <p v-if="seen">Now you see me</p>

    <button v-on:click="sayHi">Say hi!</button>
    <br />

    <!-- <a href="http://google.com" v-on:click="sayHi">Say hi!</a> -->
    <a href="http://google.com" v-on:click.prevent="sayHi">Say hi!</a>
    <br />

    <!-- shorthands -->
    <button @click="sayHi">Say hi!</button>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      words: ['one', 'two', 'three'],
      seen: true
    };
  },
  methods: {
    getThreePosition: function() {
      console.log('function call');
      var pos = '-1';
			this.words.forEach(function(word, index){
        if (word === 'three'){
          pos = index;
        }
      });
      return pos;
    },
    wordWatcherHlr: function(words) {
      console.log(words);
    },
    sayHi: function(){
      alert('Hiiiiii!');
    }
  },
  computed: {
		threePosition: function() {
      console.log('function call');
      var pos = '-1';
			this.words.forEach(function(word, index){
        if (word === 'three'){
          pos = index;
        }
      });
      return pos;
    }
  },
  watch: {
    words: function(words) {
      console.log(words);
    },
    // words: this.wordWatcherHlr,
  }
}
</script>

