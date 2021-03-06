<template lang="pug">
.comment-entry
  .card(:class='{"border-info": (comment.data.id && comment.data.id === $route.params.comment_id)}')
    .card-header.text-muted.position-sticky(style='top: 0; z-index: 1;')
      b-badge(v-if='comment.data.stickied')
        | [stickied]
      | &#32;
      UserLink(:username='comment.data.author')
      | &#32;
      b-badge(v-if='comment.data.is_submitter')
        | [OP]
      | &#32;
      b-badge(v-if='comment.data.body === "[removed]"') [removed]&#32;
      b-badge(v-if='comment.data.locked') [locked]&#32;
      FlairBadge(:item='comment' type='author')
      | &#32;
      UsertagBadge(:item='comment' type='author')
      | &#32;
      GildedBadge(:item='comment')
      | &#32;
      b-badge(v-if='comment.data.author_patreon_flair') [patreon]&#32;
      b-badge(v-if='comment.data.author_cakeday') [cakeday]&#32;
      b-badge(v-if='comment.data.send_replies===false') [send_replies:0]&#32;
      TimeAgo(:value='comment.data.created_utc')
      template(v-if='comment.data.edited') *
      | &#32;
      ApprovedBadge(:item="comment")
      | &#32;
      RemovedBadge(:item="comment")
      | &#32;
      b-badge(v-if='comment.data.spam', variant='danger') [spam]
      | &#32;
      SubredditLink(
        v-if='showSubreddit'
        :subreddit='comment.data.subreddit'
      )
      | &#32;
      Awards(:item="comment")
      | &#32;
      nuxt-link(
        v-if='!$route.params.post_id && comment.data.link_title'
        :to='comment.data.permalink'
      )
        small on {{ comment.data.link_title }}
      .pull-right
        i.fa.fa-fw.fa-btn.btn-collapse(
          :class='collapsed ? "fa-plus" : "fa-minus"'
          @click.prevent.stop='toggleCollapsed'
        )
        | &nbsp;
    .card-body(v-if="!collapsed")
      ItemHtml(:item='comment')
    .card-footer.text-muted.bg-light.position-sticky(v-if="!collapsed" style='bottom: 0; z-index: 1;')
      .options-icons.pull-right.bg-light
        span.btn-reply-toggle(
          :class='showReply ? "text-info" : ""'
          @click.prevent.stop='showReply^=true'
        )
          i.fa.fa-fw.fa-btn.fa-reply
        | &nbsp;
        | &nbsp;
        i.fa.fa-cog.fa-fw.fa-btn.btn-options(
          :class='showOptions ? "text-info" : ""'
          @click.prevent.stop='showOptions^=true'
        )
        | &nbsp;
        | &nbsp;
        UpVote(:item='comment')
        | &nbsp;
        | &nbsp;
        Score(:item='comment')
        | &nbsp;
        | &nbsp;
        DownVote(:item='comment')
        | &nbsp;
        | &nbsp;
      template(v-if="open")
        AddToQueueButton(:item='comment')
        | &#32;
        a(
          :href='`https://www.reddit.com${comment.data.permalink}`'
          target='_blank'
        )
          i.fa.fa-fw.fa-btn.fa-reddit
          span see on reddit
        | &#32;
        nuxt-link(
          :to='comment.data.permalink'
        )
          i.fa.fa-fw.fa-btn.fa-link-ext
          span permalink
        | &#32;
        SaveButton(:item='comment')
        | &#32;
        ShareButton(:item='comment')
        | &#32;
        nuxt-link(
          v-if='parentTo'
          :to='parentTo'
        )
          i.fa.fa-fw.fa-btn.fa-level-up
          span parent
        | &#32;
        nuxt-link(
          v-if='linkTo'
          :to='linkTo'
        )
          i.fa.fa-fw.fa-btn.fa-level-up
          span full comments
        | &#32;
        span.btn-edit-toggle(
          v-if='isAuthor'
          @click.prevent.stop='showEdit^=true'
        )
          i.fa.fa-fw.fa-btn.fa-edit
          span edit
        | &#32;
        //- HideButton(:item='comment')
        //- | &#32;
        template(v-if='comment.data.can_mod_post')
          SpamButton(:item='comment')
          | &#32;
          RemoveButton(:item='comment')
          | &#32;
          ApproveButton(:item='comment')
          | &#32;
          LockButton(:item='comment')
          | &#32;
        BanButton(:item='comment')
        | &#32;
        AddContributorButton(:item='comment')
        | &#32;
        DeleteButton(:item='comment' v-if='isAuthor')
        | &#32;
        //- GiveGoldButton(:item='comment' v-if='!isAuthor')
        //- | &#32;
        ReportButton(:item='comment' v-if='!isAuthor')
        | &#32;
        CrossPostButton(
          @click.prevent.stop='showCrossPost^=true'
        )
        SeeReportsButton(:item="comment" @click.prevent.stop='showReports^=true')
        span.btn-see-source(
          @click.prevent.stop='showSource^=true'
        )
          i.fa.fa-fw.fa-btn.fa-code
          | &#32;see source
    CommentForm(
      v-if="showReply && !collapsed"
      :parent='comment'
      @created-comment='onCommentCreated'
      @close='showReply = false'
    )
    CommentForm(
      v-if="showEdit && !collapsed"
      :comment='comment'
      @updated-comment='onCommentUpdated'
      @close='showEdit = false'
    )
    PostForm(
      v-if="showCrossPost && !collapsed"
      :parent='item'
      @created-post='onCrossPostCreated'
      @close='showCrossPost = false'
    )
    ShowReports(v-if="showReports && !collapsed" :item="comment")
    pre.small.text-monospace(v-if="showSource && !collapsed" v-text="comment")
  CommentTree(
    v-if='showReplies && !collapsed'
    :comments='comment.data.replies'
  )
</template>

<script>
import get from 'lodash/get';
import Awards from '~/components/Awards';
import ApproveButton from '~/components/ApproveButton';
import ApprovedBadge from '~/components/ApprovedBadge';
import AddToQueueButton from '~/components/AddToQueueButton';
import AddContributorButton from '~/components/AddContributorButton';
import BanButton from '~/components/BanButton';
import CommentForm from '~/components/CommentForm';
import CrossPostButton from '~/components/CrossPostButton';
import DeleteButton from '~/components/DeleteButton';
import DownVote from '~/components/DownVote';
import FlairBadge from '~/components/FlairBadge';
import GildedBadge from '~/components/GildedBadge';
import HideButton from '~/components/HideButton';
import ItemHtml from '~/components/ItemHtml';
import LockButton from '~/components/LockButton';
import UsertagBadge from '~/components/UsertagBadge';
import PostForm from '~/components/PostForm';
import RemovedBadge from '~/components/RemovedBadge';
import RemoveButton from '~/components/RemoveButton';
import ReportButton from '~/components/ReportButton';
import SaveButton from '~/components/SaveButton';
import Score from '~/components/Score';
import ShareButton from '~/components/ShareButton';
import SpamButton from '~/components/SpamButton';
import SubredditLink from '~/components/SubredditLink';
import TimeAgo from '~/components/TimeAgo';
import UpVote from '~/components/UpVote';
import UserLink from '~/components/UserLink';
import ShowReports from '~/components/ShowReports';
import SeeReportsButton from '~/components/SeeReportsButton';
import { isVirtualSubreddit } from '~/lib/subreddit';
import { makeComputeToggler } from '~/lib/toggle_open';
import { mapGetters } from 'vuex';

export default {
  name: 'CommentEntry',
  components: {
    Awards,
    ApproveButton,
    ApprovedBadge,
    AddToQueueButton,
    AddContributorButton,
    BanButton,
    CommentForm,
    CrossPostButton,
    DeleteButton,
    DownVote,
    FlairBadge,
    GildedBadge,
    HideButton,
    ItemHtml,
    LockButton,
    UsertagBadge,
    PostForm,
    RemovedBadge,
    RemoveButton,
    ReportButton,
    SaveButton,
    Score,
    ShareButton,
    SpamButton,
    SubredditLink,
    TimeAgo,
    UpVote,
    UserLink,
    ShowReports,
    SeeReportsButton,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      collapsed: get(this.comment, 'data.collapsed'),
      open: null,
      reply: null,
    };
  },
  computed: {
    ...mapGetters('auth', ['MeData', 'usernames']),
    isRemoved() {
      if (this.comment.data.removed) {
        return true;
      }
      if (!this.comment.data.approved) {
        // @link https://old.reddit.com/r/bugs/comments/ak741x/when_automoderator_removes_a_comment_in_the_api/?
        if (this.comment.data.banned_by === 'AutoModerator') {
          return true;
        }
      }
      return false;
    },
    showReplies() {
      const { replies } = this.comment.data;
      return replies && replies.data.children && replies.data.children.length;
    },
    parentTo() {
      const { parent_id, permalink, link_id, id } = this.comment.data;
      if (parent_id && parent_id !== link_id && permalink) {
        return permalink.replace(id, parent_id.slice(3));
      }
      return null;
    },
    linkTo() {
      const { parent_id, permalink, link_id, id } = this.comment.data;
      if (parent_id && permalink) {
        const linkPath = permalink.replace(`/${id}/`, '/');
        if (this.$route.path !== linkPath) {
          return linkPath;
        }
      }
      return null;
    },
    isAuthor() {
      const { author } = this.comment.data;
      return this.usernames.includes(author);
    },
    showSubreddit() {
      if (!this.comment.data.subreddit) return false;
      if (!this.$route.params.subreddit) return true;
      return isVirtualSubreddit(this.$route.params.subreddit);
    },
    showSource: makeComputeToggler('source'),
    showReply: makeComputeToggler('reply'),
    showReports: makeComputeToggler('reports'),
    showEdit: makeComputeToggler('edit'),
    showCrossPost: makeComputeToggler('cross'),
    showOptions: makeComputeToggler('options'),
  },
  mounted() {
    if (this.comment.data.num_reports > 0) {
      this.showOptions = true;
    }
    if (get(this.comment, 'data.saved')) {
      this.showOptions = true;
    }
  },
  methods: {
    toggleCollapsed($event) {
      this.collapsed ^= true;
    },
    setCollapsed(value) {
      this.collapsed = !!value;
    },
    onCommentUpdated(updatedComment) {
      // @todo
    },
    onCommentCreated(newComment) {
      this.comment.data.replies = this.comment.data.replies || {
        data: {
          children: [],
        },
      };

      this.comment.data.replies.data.children.push(newComment);
    },
    onCrossPostCreated(newPost) {
      //
    },
  },
};
</script>

<style lang="sass">
.comment-entry
  font-size: 1rem;
  .card
    .card-header, .card-footer, .card-body
      padding: 0.20rem;
  .btn-collapse, .btn-reply-toggle, .btn-edit-toggle, .btn-see-source
    cursor: pointer;
  .options-icons
    margin-top: -1rem;
</style>
