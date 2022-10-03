<template>
  <div>
    <h5>Add bill</h5>
    <hr />
    <div class="row">
      <div class="col-3">
        <div style="margin-bottom: 12%">
          <label for="item">Vendor</label>

          <div style="position: relative" class="col-md-4">
            <div ref="searchHandler" class="searchDropdownParent">
              <div
                class="showSearchDiv"
                @click="showSearch = !showSearch"
              ></div>
              {{ selectedVendor }}
              <div
                v-show="showSearch"
                class="searchDropdown"
                ref="searchDropdown"
              >
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
        </div>
        <div>
          <label for="item">Currency</label>
          <div style="position: relative" class="col-md-4">
            <div ref="searchHandler" class="searchDropdownParent">
              <div
                class="showSearchDiv"
                @click="showSearchCurrency = !showSearchCurrency"
              ></div>
              {{ selectedCurrency }}
              <div
                v-show="showSearchCurrency"
                class="searchDropdown"
                ref="searchDropdown"
              >
                <input
                  label="Search Here"
                  v-model="searchCurrency"
                  placeholder="Search a vender"
                />
                <ul>
                  <li
                    v-for="(item, index) in searchedItemsCurrency"
                    :key="index"
                    @click="
                      selectedCurrency = item;
                      showSearchCurrency = false;
                    "
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
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
      </div>
      <div class="col-3">
        <p><label for="bills">Bills#</label></p>
        <input type="text" class="item" />
      </div>
      <div class="col-3">
        <p><label for="notes">Notes</label></p>
        <textarea
          style="width: 100%"
          name=""
          id=""
          cols="20"
          rows="5"
        ></textarea>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-2">
        <label for="item">Item</label>
        <br />
        <select style="height: 50%">
          <option>Choose</option>
          <option value="Vendor name">Vendor name</option>
          <option value="item name1">Item Name 1</option>
          <option value="item name2">Item Name 2</option>
        </select>
      </div>
      <div class="col-2">
        <label for="item">Expense Category</label>
        <br />
        <select style="height: 50%">
          <option>Choose</option>
          <option value="Vendor name">Vendor name</option>
          <option value="item name1">Item Name 1</option>
          <option value="item name2">Item Name 2</option>
        </select>
      </div>
      <div class="col-2">
        <label for="Description">Description</label>
        <br />
        <input type="text" placeholder="Type..." />
      </div>
      <div class="col-1">
        <label for="Qty">Qty</label>
        <br /><input type="number" id="Qty" placeholder="1" />
      </div>
      <div class="col-2">
        <label for="Qty">Price</label>
        <br /><input class="item" type="text" placeholder="0" />
      </div>
      <div class="col-2">
        <label for="Qty">Tax</label>
        <br />
        <div style="position: relative" class="col-md-4">
          <div ref="searchHandler" class="searchDropdownParent">
            <div class="showSearchDiv" @click="showTax = !showTax"></div>
            {{ selectedTax }}
            <div v-show="showTax" class="searchDropdown" ref="searchDropdown">
              <input
                label="Search Here"
                v-model="selectedTax"
                placeholder="Search a vender"
              />
              <ul>
                <li
                  v-for="(item, index) in searchedItems"
                  :key="index"
                  @click="
                    selectedTax = item;
                    showTax = false;
                  "
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1">
        <label for="Qty" class="margin1">Amount</label>
        <br /><input class="margin" type="text" placeholder="$ 0.00" />
      </div>
    </div>
    <hr />
    <div class="line">
      <p>Subtotal:$0.00</p>
      <p><span>Total</span>(USD):$0.00</p>
    </div>
    <p class="Addline">Add a line</p>
    <div class="row">
      <div class="col-md-12">
        <button class="button1" @click="$router.push('/bills')">Save</button>
        <button class="button" @click="$router.push('/bills')">Cancel</button>
      </div>
    </div>

    <div v-show="showAddItem" class="modal-container">
      <div class="card">
        <div class="close" @click="closeAllModals">close</div>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItems: ["item 1", "item 2"],
      searchCurrencyItems: ["USD", "PKR"],
      itemSearch: "",
      showItem: false,
      selectedItem: "Select Item",
      showAddItem: false,
      selectedVendor: "All Vendors",
      selectedTax: "...",
      selectedCurrency: "USD",
      showSearch: false,
      showTax: false,
      showSearchCurrency: false,
      searchText: "",

      searchCurrency: "",
    };
  },
  methods: {
    closeAllModals() {
      this.showItem = false;
      this.showAddItem = false;
    },
  },
  watch: {
    showSearch: {
      handler: function () {
        this.searchText = "";
        if (this.showSearch === true) {
          this.showTax = false;
          this.showSearchCurrency = false;
        }
      },
    },
    showTax: {
      handler: function () {
        this.searchTax = "";
        if (this.showTax === true) {
          this.showSearch = false;
          this.showSearchCurrency = false;
        }
      },
    },
    showSearchCurrency: {
      handler: function () {
        this.searchCurrency = "";
        if (this.showSearchCurrency === true) {
          this.showTax = false;
          this.showSearch = false;
        }
      },
    },
  },
  computed: {
    searchedItems() {
      return this.searchItems.filter((x) => {
        return x.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
    searchedItemsCurrency() {
      return this.searchCurrencyItems.filter((x) => {
        return x.toLowerCase().includes(this.searchCurrency.toLowerCase());
      });
    },
  },
};
</script>
