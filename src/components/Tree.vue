<template>
  <TreeItem class="item"
            :item="getObjects"
            @make-folder="makeFolder"
            @add-item="addItem"></TreeItem>
</template>

<script>
import TreeItem from "./TreeItem";
import { mapMutations, mapGetters } from "vuex";

var treeData = {
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wat" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }]
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }]
        }
      ]
    }
  ]
};
export default {
  name: "Tree",
  components: {
    TreeItem
  },
  data: function() {
    return {
      treeData: treeData
    };
  },
  created() {
    this.addNewObjects(this.treeData);
  },
  computed: {
    ...mapGetters([
      // проксирует `this.doneCount` в `store.getters.doneTodosCount`
      "getObjects"
    ])
  },
  methods: {
    ...mapMutations([
      "addNewObjects",
      "addNewObject"// `this.increment()` будет вызывать `this.$store.commit('increment')`
    ]),
    makeFolder: function(item) {
      this.$set(item, "children", []);
      this.addItem(item);
    },
    addItem: function(item) {
      this.addNewObject({ item: item, newItem: { name: "new!!", children: [] } });
    }
  }
};
</script>

<style scoped>

</style>