<template lang="pug">
  span(v-text='text' :title='title')
</template>

<script>
import isNumber from 'lodash/isNumber';
const formatDistanceToNow = require('date-fns/formatDistanceToNow');

const formatDistanceToNowOptions = { addSuffix: true };

export default {
  name: 'DateTime',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    dateValue() {
      const { value } = this;
      if (value instanceof Date) {
        return value;
      }
      if (isNumber(value)) {
        return new Date(value * 1000);
      }
      return new Date(value);
    },
    title() {
      return formatDistanceToNow(this.dateValue, formatDistanceToNowOptions);
    },
    text() {
      const d = new Date(this.dateValue);
      return d.toLocaleString();
    },
  },
};
</script>

<style></style>
