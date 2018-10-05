<template>
  <div class="hello">
    <h3>Select Account</h3>
    <select v-model="accountId">
      <option value="">None</option>
      <option value="r17WseDHA22DW">r17WseDHA22DW</option>
    </select>
    <h3>Select Item</h3>
    <select v-model="trackedItemId">
      <option :value="null">None</option>
      <option v-for="{name, id} in items" :value="id" :key="id">{{ name }}</option>
    </select>
    <div v-if="item">
      <h3>Item</h3>
      <p>{{ item }}</p>
    </div>
    <div v-if="item">
      <h3>Other Items in this group</h3>
      <ul>
        <li v-for="{ id, name } in itemGroup" :key="id">{{ name }}</li>
      </ul>
    </div>
    <div v-if="item">
      <h3>Other Items with these digits</h3>
      <div v-for="(digit, i) in itemDigits" :key="i">
        <h4>{{ digit }}</h4>
        <ul>
          <li v-for="{ id, name } in $store.getters.byDigit(digit)" :key="id">{{ name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      itemId: null
    }
  },
  computed: {
    trackedItemId: {
      get () {
        return this.itemId
      },
      set (itemId) {
        console.log(`<<< Changing item id to ${itemId} >>>`)
        this.itemId = itemId
      }
    },
    items () {
      return this.$store.getters.current()
    },
    accountId: {
      get () {
        return this.$store.state.accountId
      },
      set (accountId) {
        this.$store.commit('SET_ACCOUNT_ID', accountId)
      }
    },
    item () {
      return this.itemId
        ? this.$store.getters['byId'](this.itemId)
        : null
    },
    itemDigits () {
      return this.item
        ? this.item.id.toString().split('').reduce((list, item) => {
          return list.includes(item) ? list : [...list, item]
        }, [])
        : []
    },
    itemGroup () {
      return this.item
        ? this.$store.getters['byGroup'](this.item.group)
        : []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
