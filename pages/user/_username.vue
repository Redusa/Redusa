<template lang="pug">
  div
    .row
      .col
        .subreddit-banner(:style='subredditBannerStyles')
        br
        b-img.profile-icon-img(
          v-if="user.data.icon_img"
          :src="user.data.icon_img"
          thumbnail
          width="128"
          height="128"
        )
        br
        br
        br
        h2(@click.prevent.stop="$write_clipboard(user.data.name)")
          | /u/{{user.data.name}}
        p(v-if="user.data.subreddit && user.data.subreddit.public_description" v-text="user.data.subreddit.public_description")
        p(v-if="user.data.subreddit && user.data.subreddit.description" v-text="user.data.subreddit.description")
      .col
        table.table.table-sm(style="width: unset; min-width:256px")
          tbody
            tr(v-if="user.data.is_employee")
              th is_employee
              td(class="text-right") {{user.data.is_employee}}
            tr
              th link_karma
              td(class="text-right") {{user.data.link_karma}}
            tr
              th comment_karma
              td(class="text-right") {{user.data.comment_karma}}
            tr
              th awardee_karma
              td(class="text-right") {{user.data.awardee_karma}}
            tr(v-if="user.data.subreddit")
              th followers
              td(class="text-right") {{user.data.subreddit.subscribers}}
            tr
              th accept_chats
              td(class="text-right") {{user.data.accept_chats}}
            tr
              th accept_pms
              td(class="text-right") {{user.data.accept_pms}}
    p
      SubscribeButton(:item='user')
      | &#32;
      FriendButton(:item='user')
      | &#32;
      FollowButton(:item='user' v-if='user.data.subreddit')
      | &#32;
      TimeAgo(:value='user.data.created_utc')
      | &#32;
      a(
        :href='`https://www.reddit.com${$route.fullPath}`'
        target='_blank'
      )
        i.fa.fa-fw.fa-btn.fa-reddit
        span see on reddit
      | &#32;
      span.btn-see-source(
        @click.prevent.stop='showSource^=true'
      )
        i.fa.fa-fw.fa-btn.fa-code
        | &#32;see source
    pre.small.text-monospace(v-if="showSource" v-text="user.data")
    b-nav(tabs)
      b-nav-item(
        :to='`/user/${$route.params.username}/about`'
      )
        i.fa.fa-fw.fa-btn.fa-book
        | &#32;
        | About
      b-nav-item(
        :to='`/user/${$route.params.username}/overview`'
      )
        i.fa.fa-fw.fa-btn.fa-book
        | &#32;
        | Overview
      b-nav-item(
        :to='`/user/${$route.params.username}/submitted`'
      )
        i.fa.fa-fw.fa-btn.fa-list
        | &#32;
        | Submitted
      b-nav-item(
        :to='`/user/${$route.params.username}/comments`'
      )
        i.fa.fa-fw.fa-btn.fa-chat
        | &#32;
        | Comments
      b-nav-item(
        v-if='showUpvotedTab'
        :to='`/user/${$route.params.username}/upvoted`'
      )
        i.fa.fa-fw.fa-btn.fa-up-big
        | &#32;
        | Upvoted
      b-nav-item(
        v-if='showDownvotedTab'
        :to='`/user/${$route.params.username}/downvoted`'
      )
        i.fa.fa-fw.fa-btn.fa-down-big
        | &#32;
        | Downvoted
      b-nav-item(
        v-if='showSavedTab'
        :to='`/user/${$route.params.username}/saved`'
      )
        i.fa.fa-fw.fa-btn.fa-floppy
        | &#32;
        | Saved
      b-nav-item(
        v-if='showHiddenTab'
        :to='`/user/${$route.params.username}/hidden`'
      )
        i.fa.fa-fw.fa-btn.fa-minus-circled
        | &#32;
        | Hidden
      b-nav-item(
        v-if='showGildedTab'
        :to='`/user/${$route.params.username}/gilded`'
      )
        i.fa.fa-fw.fa-btn.fa-money
        | &#32;
        | Gilded
      b-nav-item(
        :to='{ path: "/pushshift/search/", query: { kind: "comment", author: $route.params.username } }'
      )
        i.fa.fa-fw.fa-btn.fa-list
        | &#32;
        | Pushshift
      b-nav-item(
        :to='`/user/${$route.params.username}/unique`'
      )
        i.fa.fa-fw.fa-btn.fa-list
        | &#32;
        | Unique
    nuxt-child(:user='user')
</template>

<script>
import first from 'lodash/first';
import bImg from 'bootstrap-vue/es/components/image/img';
import bNav from 'bootstrap-vue/es/components/nav/nav';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import FollowButton from '~/components/FollowButton.vue';
import FriendButton from '~/components/FriendButton.vue';
import PostList from '~/components/PostList.vue';
import RedditPagination from '~/components/RedditPagination.vue';
import RedditItems from '~/mixins/RedditItems';
import SubscribeButton from '~/components/SubscribeButton';
import TimeAgo from '~/components/TimeAgo';
import { makeComputeToggler } from '~/lib/toggle_open';
import { mapGetters } from 'vuex';

export default {
  middleware: ['auth'],
  defaultSort: 'new',
  components: {
    bImg,
    bNav,
    bNavItem,
    FollowButton,
    FriendButton,
    PostList,
    RedditPagination,
    SubscribeButton,
    TimeAgo,
  },
  data() {
    return {
      open: null,
    };
  },
  computed: {
    ...mapGetters('auth', ['MeData']),
    showSource: makeComputeToggler('source'),
    subredditBannerStyles() {
      const { subreddit } = this.user.data;
      const banner_img = subreddit ? subreddit.banner_img : null;
      return {
        'background-image': banner_img
          ? `url("${subreddit.banner_img}")`
          : null,
      };
    },
    isAuthor() {
      return this.MeData.name === this.user.data.name;
    },
    showUpvotedTab() {
      return this.isAuthor;
    },
    showDownvotedTab() {
      return this.isAuthor;
    },
    showSavedTab() {
      return this.isAuthor;
    },
    showHiddenTab() {
      return this.isAuthor;
    },
    showGildedTab() {
      return this.isAuthor;
    },
  },
  async asyncData({ reddit, route }) {
    const { username } = route.params;
    return {
      user: (await reddit.get(`/user/${username}/about`)).data,
    };
  },
};
</script>

<style lang="sass">
.subreddit-banner
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 1rem;
.profile-icon-img
  margin-left: 2rem;
.btn-see-source
  cursor: pointer;
</style>
