var ok = function () {
  alert("ok");
};

Vue.component("SearchListBox", {
  data: function (props) {
    return {
      json: props.json,
      keyword: props.keyword,
      change: props.change ? props.change : function () {},
      update: props.update ? props.update : function () {},
    };
  },
  methods: {
    searchData: function (e) {
      if (e.target.value !== this.keyword) {
        this.keyword = e.target.value;
        console.log(this.keyword);
        this.$emit("change", this.keyword);
      }
    },
    test: function () {
      console.log("test");
      this.$emit("update");
      ok();
    },
  },
  template:
    "<div" +
    '  class="fixed top-0 left-0 border-black border-l-8 border-b bg-gray-100 my-2 py-1 pl-4 w-full h-auto"' +
    ">" +
    '  <div class="flex flex-row">' +
    "    <div>" +
    "      <input" +
    '        type="text"' +
    '        class="text-xl text-left py-1 pl-2 tracking-widest border-white border-0 w-full"' +
    '        @keyup="searchData"' +
    '        :value="keyword"' +
    "      />" +
    "    </div>" +
    "    <div>" +
    "      <button" +
    '        class="mx-2 w-10 h-full bg-gray-400 rounded-lg"' +
    '        @click="test"' +
    "      >" +
    '        <i class="fa fa-refresh"></i>' +
    "      </button>" +
    "    </div>" +
    "  </div>" +
    "</div>",
});
