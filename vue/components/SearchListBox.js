Vue.component("SearchListBox", {
  data: function (props) {
    return {
      items: jsonData,
      keyword: props.keyword ? props.keyword : "",
    };
  },
  methods: {
    searchData: function (e) {
      if (e.target.value !== this.keyword) {
        this.keyword = e.target.value;
        /* console.log(this.keyword); */
        this.$emit("change", this.keyword);
      }
    },
    doUpdate: function () {
      this.$emit("update");
    },
  },
  template:
    '<div class="w-full">' +
    " <div" +
    '   class="fixed top-0 left-0 border-black border-l-8 border-b bg-gray-100 my-2 py-1 pl-4 w-full h-auto"' +
    " >" +
    '    <div class="flex flex-row">' +
    "     <div>" +
    "       <input" +
    '         type="text"' +
    '         class="shadow-inner text-xl text-left py-1 pl-2 tracking-widest rounded-lg focus:outline-none border-white border-0 w-full"' +
    '         @keyup="searchData"' +
    '         :value="keyword"' +
    "       />" +
    "     </div>" +
    "     <div>" +
    "       <button" +
    '         class="mx-2 w-10 h-full bg-gray-400 rounded-lg"' +
    '         @click="doUpdate"' +
    "       >" +
    '         <i class="fa fa-refresh"></i>' +
    "       </button>" +
    "     </div>" +
    "   </div>" +
    " </div>" +
    ' <div id="contents" class="flex flex-col bg-white pt-16">' +
    '   <div v-for="item in items" :key="item.name">' +
    '     <div v-if="~item.name.toLowerCase().indexOf(keyword.toLowerCase())" class="mb-1">' +
    '       <a :href="item.path">' +
    '         <div class="text-xs text-gray-400">{{item.path}}</div><div class="pl-2 text-lg">{{item.name}}</div>' +
    "       </a>" +
    "     </div>" +
    "   </div>" +
    " </div>" +
    "</div>",
});
