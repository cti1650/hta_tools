Vue.component("tool", {
  data: function () {
    return {
      items: [],
    };
  },
  mounted: function () {
    this.load();
  },
  methods: {
    load: function () {
      var self = this;
      axios
        .get(
          "https://script.googleusercontent.com/macros/echo?user_content_key=Jfjp697HoJiskWQnN0T6JrNQaJmagjhGmUsKXtvd4SvCe2rbFI1CDnQfk5UBVxJTEiElPJduF7uCRGCHybgczZHkZX4P2yl-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIpGzwPqKc1vnMAimnEk0w0dCClc-13zIEt0DBDGJKyYoaBfI-ZsUc0jPOPBMwaLOv9yq-1JZMW8j7Rhm_ixm_a9QEaL_YQ8nA&lib=MEWaq8znWJKP_ENCbnLfsT1k0Zr-bqyeo"
        )
        .then(function (res) {
          console.log(res);
          self.items = res.data.tool;
        });
    },
  },
  template: `
  <ul class="flex flex-row flex-wrap bg-gray-300">
  <div class="w-full sm:w-1/3" v-for="item in items"><a href="{{item.url}}">
  <li class="bg-white hover:bg-gray-300 rounded-lg border border-gray-500 px-2 py-1">
  <div class="text-xs text-gray-500">{{ item.summary }}</div><div>{{ item.name }}</div>
  </li>
  </a><div>
  </ul>
  `,
});
