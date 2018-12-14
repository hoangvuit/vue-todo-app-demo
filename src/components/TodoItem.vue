<template>
  <li v-bind:class="{ done: done }">
    <input
      type="checkbox"
      v-model="mutableDone"
      v-bind:id="id"
    />
    <label v-bind:for="id">test</label>
    <span>{{ text }}</span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    text: String,
    done: Boolean,
    id: String
  },
  data: function(){
    return {
      mutableDone: this.done
    };
  },
  computed: {
    status: function(){
      if (this.mutableDone) {
        return 'Done'
      } else {
        return 'Pending'
      }
    }
  },
  watch: {
    mutableDone: {
      handler: function(){
        this.$emit('update-item', this);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input[type=checkbox]{
    display: none;
  }
  .done {
    text-decoration: line-through;
    label{
      background-color: #9ACD32;
      &:before{
        content: '\2713';
        font-size: 15px;
        color: #fff;
      }
    }
  }
  label{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 0;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin-right: 10px;
    position: relative;
    top: -3px;
    cursor: pointer;
  }
</style>

