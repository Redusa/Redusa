<template lang="pug">
.card
  div.card-header
    SubredditLink(
      v-if="conversation.owner.type==='subreddit'"
      :subreddit="conversation.owner.displayName"
    )
    UserLink(
      v-else-if="conversation.owner.displayName"
      :username="conversation.owner.displayName"
    )
    | &#32;-&#32;
    nuxt-link(:to="`/mod/mail/conversation/${conversation.id}`")
      | {{ conversation.subject }}
      | &#32;
      small {{ conversation.lastUpdated }}
    | &#32;
    ArchiveButton(:item="conversation" v-if="false")
  .card-body
    p.small.text-monospace.text-muted(v-text="getIs(conversation)")
    | participant:&#32;
    template(v-if="conversation.participant")
      UserLink(
        v-if="conversation.participant.name"
        :username="conversation.participant.name"
        :class="userClasses(conversation.participant)"
      )
      tt(v-else) @todo unhandled participant scenario
      small.text-monospace.text-muted(v-text="getTrueIs(conversation.participant)")
    br
    | authors:&#32;
    template(v-for="(author, index) in conversation.authors")
      UserLink(:username="author.name" :class="userClasses(author)" :key="author.name+index")
      small.text-monospace.text-muted(:key="author.name+'_is'+index" v-text="getTrueIs(author)")
    blockquote.text-muted @todo show most recent message
    blockquote.text-muted {{ {messages: Object.keys(messages).length} }}
    span.btn-see-source(
      @click.prevent.stop='showSource^=true'
    )
      i.fa.fa-fw.fa-btn.fa-code
      | &#32;see source
  div.card-body(v-for="(message, id) in messages" :key="id")
    ItemHtml(:value="message.body")
  div.card-body
    pre.small.text-monospace(v-if="showSource" v-text="JSON.stringify({conversation, messages}, null, 2)")
</template>

<script>
import SubredditLink from '~/components/SubredditLink';
import TimeAgo from '~/components/TimeAgo';
import UserLink from '~/components/UserLink';
import ItemHtml from '~/components/ItemHtml';
import ArchiveButton from '~/components/Mod/Mail/ArchiveButton';
import { makeComputeToggler } from '~/lib/toggle_open';

export default {
  name: 'Conversation',
  components: {
    ArchiveButton,
    ItemHtml,
    SubredditLink,
    TimeAgo,
    UserLink,
  },
  props: {
    conversation: {
      type: Object,
      required: true,
    },
    messages: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      open: null,
    };
  },
  computed: {
    showSource: makeComputeToggler('source'),
  },
  methods: {
    // {"isMod":false,"isAdmin":false,"name":"USERNAME","isOp":false,"isParticipant":true,"isHidden":true,"id":11011546,"isDeleted":false}
    userClasses(modMailUser) {
      return {
        'text-danger': modMailUser.isAdmin,
        'text-success': modMailUser.isMod,
        'text-warning': modMailUser.isDeleted,
      };
    },
    getIs(obj) {
      const result = {};
      let shouldReturnNull = true;
      for (const key in obj) {
        if (key.startsWith('is')) {
          result[key] = obj[key];
          shouldReturnNull = false;
        }
      }
      if (shouldReturnNull) return null;
      return result;
    },
    getTrueIs(obj) {
      const result = {};
      let shouldReturnNull = true;
      for (const key in obj) {
        if (key.startsWith('is') && obj[key]) {
          result[key] = obj[key];
          shouldReturnNull = false;
        }
      }
      if (shouldReturnNull) return null;
      return result;
    },
  },
};
</script>
