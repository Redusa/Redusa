<template lang="pug">
  .add-wikibanned-form
    b-form-input.wikibanned-username(
      v-model="username"
    )
    .alert.alert-danger(v-if='errors')
      pre.text-monospace {{ errors }}
    .alert.alert-success(v-if='success')
      pre.text-monospace {{ success }}
    button.btn.btn-secondary(
      v-disabled='isSaveDisabled'
      @click.prevent.stop='save'
    )
      i.fa.fa-fw.fa-btn.fa-spinner.fa-spin(v-if='saving')
      i.fa.fa-fw.fa-btn.fa-floppy(v-else)
      span(v-if='saving') Saving
      span(v-else) Save
</template>

<script>
import get from 'lodash/get';
import { startMinWait } from '~/lib/sleep';
import { mapGetters } from 'vuex';

export default {
  name: 'AddWikiBannedForm',
  data() {
    return {
      username: '',
      saving: false,
      errors: null,
      success: null,
    };
  },
  computed: {
    ...mapGetters('auth', ['MeData']),
    isSaveDisabled() {
      if (this.busy) {
        return true;
      }
      if (!this.username) {
        return true;
      }
      // @todo more validate
      return false;
    },
  },
  mounted() {
    if (this.$route.query.username) {
      this.username = this.$route.query.username;
    }
  },
  methods: {
    async save($event) {
      const { subreddit } = this.$route.params;
      const minWait = startMinWait();
      this.errors = null;
      this.success = null;
      this.saving = true;
      try {
        const response = await this.$reddit.post(`/r/${subreddit}/api/friend`, {
          name: this.username,
          api_type: 'json',
          type: 'wikicontributor',
        });

        if (get(response.data, 'json.errors.length')) {
          throw get(response.data, 'json.errors');
        }

        this.success = 'WikiBanned Added!';
        this.username = '';
      } catch (err) {
        this.errors = err;
        // throw err;
      } finally {
        await minWait;
        this.saving = false;
      }
    },
  },
};
</script>

<style lang="sass">
.add-wikibanned-form
</style>
