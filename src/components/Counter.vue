<template>
  <div>
    <button @click='INCREMENT'>Increment +1</button>
    <button @click='DECREMENT'>Decrement -1</button>
    <h3>Count is {{ count }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { INCREMENT, DECREMENT } from '../vuex/modules/counter/type';

export default {
  methods: {
    ...mapActions('counter/', [
      INCREMENT,
      DECREMENT,
    ]),
  },
  computed: {
    ...mapGetters('counter/', {
      count: 'count',
    }),
  },
};
</script>

<style>
  
</style>