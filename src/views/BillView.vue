<template>
  <div class="row">
    <div style="position: relative" class="col-md-4">
      <div ref="searchHandler" class="searchDropdownParent">
        <div class="showSearchDiv" @click="showSearch = !showSearch"></div>
        {{ selectedVendor }}
        <div v-show="showSearch" class="searchDropdown" ref="searchDropdown">
          <input
            label="Search Here"
            v-model="searchText"
            placeholder="Search a vender"
          />
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
    </div>
    <div class="col-md-5 date1">
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
    <div class="col-md-3">
      <a @click="$router.push('/create-bill')"
        ><button class="btn">Create a Bill</button></a
      >
    </div>
    <table class="table table-striped">
      <thead class="text-primary">
        <tr>
          <th scope="col"><input type="checkbox" /></th>
          <th scope="col">Date</th>
          <th scope="col">Number</th>
          <th scope="col">Vendor</th>
          <th scope="col">Amount Due</th>
          <th scope="col">
            <label for="PaymentStatus">Payment Status</label>
            <select style="display: none;" class="select1" id="PaymentStatus">
              <option></option>
              <option value="volvo">All</option>
              <option value="saab">Paid</option>
              <option value="mercedes">Unpaid</option>
            </select>
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody class="TBD">
        <tr v-for="(bill, index) in billList" :key="index">
          <td scope="row">
            <input type="checkbox" v-model="bill.checked" />
          </td>
          <td>{{ bill.date }}</td>
          <td>{{ bill.number }}</td>
          <td>{{ bill.name }}</td>
          <td>${{ bill.price }}</td>
          <td :class="bill.status ? 'green-text' : 'red-text'">
            {{ bill.status ? "Paid" : "Unpaid" }}
          </td>
          <td>
            <a @click="openRecordPayment()"><span>Record a Payment</span> </a>
            <div style="position: relative; display: inline-block">
              <div class="select" ref="modalOpener" @click="showModal(index)">
                <img
                  :class="bill.modal ? 'rotateImg' : ''"
                  src="https://static.thenounproject.com/png/551749-200.png"
                />
              </div>
              <div ref="modal" v-show="bill.modal" class="dropdown">
                <ul class="options">
                  <li @click="openRecordPayment">Record a Payment</li>
                  <li @click="$router.push('/create-bill')">View/Edit</li>
                  <li @click="bill.modal = false">Duplicate</li>
                  <li @click="bill.modal = false">
                    <!-- Add image here -->
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png"
                    />
                    Delete
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="recordPayment" class="Dialog">
      <div>
        <span>Record a manual payment</span>
        <span @click="CloseDialog" style="cursor: pointer">x</span>
      </div>
      <hr />
      <div>
        <div>
          <label for="">Payment Method</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Amount</label>
          <input type="text" />
          <span>USD - U.S dollar</span>
        </div>
        <div>
          <label for="">Payment Date</label>
          <input type="date" />
        </div>
        <div>
          <label for="">Payment Account</label>
          <select name="" id="">
            <option value=""></option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <span>USD - U.S dollar</span>
        </div>
        <div>
          <label for="">Memo</label>
          <textarea name="" id="" rows="5"></textarea>
        </div>
      </div>
      <div>
        <button @click="CloseDialog">Cancel</button>
        <button>Save</button>
      </div>
    </div>
    <div class="Overlay" v-show="recordPayment"></div>
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
      searchItems: ["Vendor 1", "Vendor 2", "Vendor 3"],
      showSearch: false,
      searchText: "",
      selectedVendor: "All Vendors",
      recordPayment: false,
    };
  },
  mounted() {
    // document.addEventListener("click", (e) => {
    //   this.handleModal(e);
    // });
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
    openRecordPayment() {
      this.billList.forEach((x) => {
        x.modal = false;
      });
      this.recordPayment = true;
    },
    CloseDialog() {
      this.recordPayment = false;
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
