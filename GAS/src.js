Vue.component("LinkButtons", {
  props: ["items"],
  template: `
      <ul class="flex flex-row flex-wrap bg-gray-300">
      <div class="w-full sm:w-1/2 lg:w-1/4 p-1" v-for="item in items">
      <a :href="item.url" target="_blank" rel="noopener noreferrer">
      <li class="bg-white hover:shadow-inner hover:bg-gray-300 rounded-lg border border-gray-500 px-2 py-1 shadow-lg">
      <div class="text-xs text-gray-500">{{ item.summary }}</div><div>{{ item.name }}</div>
      </li>
      </a>
      <div>
      </ul>
      `,
});

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
          "https://script.googleusercontent.com/macros/echo?user_content_key=Vu0oc5JaKAHuhZuQB5erne5wt8CinebIfLMqz520DlExHSSul0RCQXn9GHuuQtSKkXd2_E6ZArpjlUBCfTmTs1Ku0psh1dsrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIpGzwPqKc1vnMAimnEk0w0dCClc-13zIEt0DBDGJKyYoaBfI-ZsUc0jPOPBMwaLOv9yq-1JZMW8j7Rhm_ixm_a9QEaL_YQ8nA&lib=MEWaq8znWJKP_ENCbnLfsT1k0Zr-bqyeo"
        )
        .then(function (res) {
          console.log(res);
          self.items = res.data;
        });
    },
  },
  template: `
  <ul class="flex flex-row flex-wrap bg-gray-300">
  <div class="w-full sm:w-1/2 lg:w-1/4 p-1" v-for="item in items.tools">
  <a :href="item.url" target="_blank" rel="noopener noreferrer">
  <li class="bg-white hover:shadow-inner hover:bg-gray-300 rounded-lg border border-gray-500 px-2 py-1 shadow-lg">
  <div class="text-xs text-gray-500">{{ item.summary }}</div><div>{{ item.name }}</div>
  </li>
  </a>
  <div>
  </ul>
  <ul class="flex flex-row flex-wrap bg-gray-300">
  <div class="w-full sm:w-1/2" v-for="item in items.modules"><a href={ item.url }>
  <li class="bg-white hover:bg-gray-300 rounded-lg border border-gray-500 px-2 py-1">
  <div class="text-xs text-gray-500">{{ item.summary }}</div><div>{{ item.name }}</div>
  </li>
  </a><div>
  </ul>
  <ul class="flex flex-row flex-wrap bg-gray-300">
  <div class="w-full sm:w-1/2" v-for="item in items.articles"><a href={ item.url }>
  <li class="bg-white hover:bg-gray-300 rounded-lg border border-gray-500 px-2 py-1">
  <div class="text-xs text-gray-500">{{ item.summary }}</div><div>{{ item.name }}</div>
  </li>
  </a><div>
  </ul>
  `,
});
