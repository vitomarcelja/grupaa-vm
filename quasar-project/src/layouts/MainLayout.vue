<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Moja Aplikacija
        </q-toolbar-title>
        <q-btn flat round icon="menu" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <!-- Drawer (Navigacija) -->
    <q-drawer v-model="drawer" show-if-above>
      <q-list>
        <!-- Link na Početnu stranicu -->
        <q-item clickable v-ripple to="/">
          <q-item-section>
            Početna stranica
          </q-item-section>
        </q-item>
        <!-- Link na Biljka Page -->
        <q-item clickable v-ripple to="/biljka">
          <q-item-section>
            Biljka Page
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Glavni sadržaj -->
    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

