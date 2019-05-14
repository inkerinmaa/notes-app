<template>

  <div class="wrapper">
    
      <div class="wrapper-content">
        <section>
          <div class="container">
            <h1> {{ title }} </h1>
            <!-- new note -->
            <div class="new-note">
              <input v-model="note.title" type="text">
              <textarea v-model="note.descr"></textarea>
              <button @click="addNote">New note</button>
            </div>
            <!-- note list -->
            <div class="notes">
              <div class="note" v-for="(note, index) in notes" :key="index">
                <div class="note-header">
                    <p> {{ note.title }} </p>
                </div>
                <div class="note-body">
                  <p> {{ note.descr }} </p>
                  <span> {{ note.date }} </span>
                </div>
              </div>
            </div>    
          </div>
        </section>
      </div>
    
  </div>

</template>

<script>
export default {
  data () {
    return {
      title: 'Notes App',
      note: {
              title: '',
              descr: ''
      },
      notes: [
        {
          title: 'First Note',
          descr: 'Description for 1st note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second Note',
          descr: 'Description for 2nd note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third Note',
          descr: 'Description for 3rd note',
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    addNote () {
        // console.log(this.note)
        let {title, descr} = this.note
        this.notes.push({
          title,
          descr,
          date: new Date(Date.now()).toLocaleString()
        })
    }
  }
}
</script>

<style>
</style>
