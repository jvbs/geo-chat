<template>
  <div class="view-profile container">
    <div v-if="profile" class="card">
      <h2 class="deep-purple-text center">{{ profile.alias }}'s wall</h2>
      <ul class="comments collection">
        <li>Comments</li>
        <form @submit.prevent="addComment">
          <div class="field">
            <label for="comment">Add new comment</label>
            <input type="text" name="comment" v-model="newComment">
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
          </div>
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
  name: 'ViewProfile',
  data(){
    return {
      profile: null,
      newComment: null,
      feedback: null,
      user: null
    }
  },
  methods: {
    addComment(){
      if(this.newComment){
        this.feedback = null
        db.collection('comments').add({
          to: this.$route.params.id,
          from: this.user.id,
          content: this.newComment,
          time: Date.now()
        })
        .then(() => {
          this.newComment = null
        })
      } else {

      }
    }
  },
  created(){
    let ref = db.collection('users')

    // get current user
    ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.user = doc.data(),
        this.user.id = doc.id
      });
    })

    ref.doc(this.$route.params.id).get().then((user) => {
      this.profile = user.data()
    })
  }
}
</script>

<style>

</style>
