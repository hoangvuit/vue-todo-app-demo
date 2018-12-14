
<template>
  <div>
    <input type="text" v-model="mutableText" v-on:keyup.enter="addNewItem"/>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: {
    text: {
      default: '',
      type: String
    }
  },
  data: function(){
    return {
      mutableText: this.text,
    };
  },
  methods: {
    addNewItem: function(){
      if (this.mutableText.trim().length !== 0){
        this.$emit('new-item', this.mutableText);
        this.mutableText = '';
      }
    }
  }
}
</script>

<style lang="scss">
  input[type=text]{
    width: 100%;
    height: 36px;
    text-align: center;
    color: #aaa;
    font-size: 20px;
    border-radius: 3px;
    background-color: rgba(239, 239, 239, 0.5);
    border: 1px solid #efefef;
  }
</style>
