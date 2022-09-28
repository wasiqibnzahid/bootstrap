<template>
  <div class="row">
    <div style="position: relative;" class="col-md-4">
      <div
        @click="showSearch = !showSearch"
        ref="searchHandler"
        class="searchDropdownParent"
      >
        {{ selectedVendor }}
      </div>
      <div v-show="showSearch" class="searchDropdown" ref="searchDropdown">
        <input label="Search Here" v-model="searchText" />
        <ul>
          <li
            v-for="(item, index) in searchedItems"
            :key="index"
            @click="
              selectedVendor = item;
              showSearch = false;
            "
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4 date1">
      <label for="from" class="label">From:</label>
      <div class="datepick">
        <input class="datepick" type="text" placeholder="2021/04/15" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calendar"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
          />
        </svg>
      </div>
      <label for="to" class="label">To:</label>
      <div class="datepick">
        <input class="datepick" type="text" placeholder="2021/04/15" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calendar"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
          />
        </svg>
      </div>
    </div>
    <div class="col-md-4">
      <a @click="$router.push('/create-bill')"
        ><button class="btn">Create a Bill</button></a
      >
    </div>
    <table class="table table-striped">
      <thead class="text-primary">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Number</th>
          <th scope="col">Vendor</th>
          <th scope="col">Amount Due</th>
          <th scope="col">
            Payment Status
            <select class="select1">
              <option></option>
              <option value="volvo">All</option>
              <option value="saab">Paid</option>
              <option value="mercedes">Unpaid</option>
            </select>
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bill, index) in billList" :key="index">
          <td>
            <input type="checkbox" v-model="bill.checked" />{{ bill.date }}
          </td>
          <td>{{ bill.number }}</td>
          <td>{{ bill.name }}</td>
          <td>${{ bill.price }}</td>
          <td :class="bill.status ? 'green-text' : 'red-text'">
            {{ bill.status ? "Paid" : "Unpaid" }}
          </td>
          <td>
            Record a Payment
            <div style="position: relative">
              <div
                class="select"
                ref="modalOpener"
                :class="bill.modal ? 'rotate' : ''"
                @click="showModal(index)"
              ></div>
              <div ref="modal" v-show="bill.modal" class="dropdown">
                <ul class="options">
                  <li @click="bill.modal = false">Edit</li>
                  <li @click="bill.modal = false">Create Bill</li>
                  <li @click="bill.modal = false">
                    <!-- Add image here -->
                    <img />
                    Delete
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billList: [
        {
          name: "Hello",
          price: "213",
          status: true,
          number: "123",
          date: "21/03/2022",
          modal: false,
        },
        {
          name: "Hello 2",
          price: "21321",
          status: false,
          number: "1232",
          date: "21/03/2022",
          modal: false,
        },
        {
          name: "Hello",
          price: "213",
          status: true,
          number: "123",
          date: "21/03/2022",
          modal: false,
        },
      ],
      searchItems: ["Vendor 1", "Vendor 2", "vendor 3", "test"],
      showSearch: false,
      searchText: "",
      selectedVendor: "All Vendors",
    };
  },
  mounted() {
    document.addEventListener("click", (e) => {
      this.handleModal(e);
    });
  },
  methods: {
    showModal(index) {
      this.billList.forEach((x, i) => {
        if (i != index) {
          x.modal = false;
        } else {
          x.modal = !x.modal;
        }
      });
    },
    handleModal(e) {
      // console.log(e);
      let closeModal = true;
      this.$refs.modal.forEach((x) => {
        if (e.target == x || x.contains(e.target)) {
          closeModal = false;
        }
      });
      // console.log(this.$refs.modalOpener);

      this.$refs.modalOpener.forEach((x) => {
        // console.log(e.target == x.modalOpener);
        if (e.target == x) {
          closeModal = false;
        }
      });
      if (closeModal) {
        this.billList.forEach((x) => {
          x.modal = false;
        });
      }
      // Search dropdown
      if (
        e.target != this.$refs.searchHandler &&
        e.target != this.$refs.searchDropdown &&
        !this.$refs.searchDropdown.contains(e.target)
      ) {
        this.showSearch = false;
      }
    },
  },
  computed: {
    searchedItems() {
      return this.searchItems.filter((x) => {
        return x.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  },
  watch: {
    showSearch: {
      handler: function () {
        this.searchText = "";
      },
    },
  },
};
</script>

<style></style>
