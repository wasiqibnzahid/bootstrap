<template>
  <div>
    <h5>Add bill</h5>
    <hr />
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">
        <label for="item">Item</label>
        <!--  -->
        <!--  -->

        <div
          @click="showItem = !showItem"
          ref="searchHandler"
          class="searchDropdownParent"
        >
          {{ selectedItem }}
        </div>
        <div v-show="showItem" class="searchDropdown" ref="searchDropdown">
          <input label="Search Here" v-model="itemSearch" />
          <ul>
            <li
              v-for="(item, index) in searchedItems"
              :key="index"
              @click="
                selectedItem = item;
                showItem = false;
              "
            >
              {{ item }}
            </li>
          </ul>
          <div class="blue" @click="showAddItem = true">Add Item</div>
        </div>
        <!--  -->
        <!--  -->
        <label for="item">Expense Category</label>
        <select>
          <option>Choose</option>
          <option value="Vendor name">Vendor name</option>
          <option value="item name1">Item Name 1</option>
          <option value="item name2">Item Name 2</option>
        </select>
      </li>
      <li class="list-group-item" id="date">
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
      </li>
      <li class="list-group-item">
        <p><label for="bills">Bills#</label></p>
        <input type="text" class="item" />
      </li>
      <li class="list-group-item">
        <p><label for="notes">Notes</label></p>
        <textarea name="" id="" cols="20" rows="5"></textarea>
      </li>
    </ul>
    <hr />
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">
        <label for="item">Item</label>
        <select>
          <option>Choose</option>
          <option value="Vendor name">Vendor name</option>
          <option value="item name1">Item Name 1</option>
          <option value="item name2">Item Name 2</option>
        </select>
      </li>
      <li class="list-group-item">
        <label for="item">Expense Category</label>
        <select>
          <option>Choose</option>
          <option value="Vendor name">Vendor name</option>
          <option value="item name1">Item Name 1</option>
          <option value="item name2">Item Name 2</option>
        </select>
      </li>
      <li class="list-group-item">
        <label for="Description">Description</label>
        <input type="text" placeholder="Type..." />
      </li>
      <li class="list-group-item">
        <label for="Qty">Qty</label
        ><input type="text" id="Qty" placeholder="1" />
      </li>
      <li class="list-group-item">
        <label for="Qty">Price</label
        ><input class="item" type="text" placeholder="0" />
      </li>
      <li class="list-group-item">
        <label for="Qty">Tax</label
        ><input class="item" type="text" placeholder="..." />
      </li>
      <li class="list-group-item">
        <label for="Qty" class="margin1">Amount</label
        ><input class="margin" type="text" placeholder="$ 0.00" />
      </li>
    </ul>
    <hr />
    <div class="line">
      <p>Subtotal:$0.00</p>
      <p><span>Total</span>(USD):$0.00</p>
    </div>
    <p class="Addline">Add a line</p>
    <div class="row">
      <div class="col-md-12">
        <button class="button1">Save</button>
        <button class="button">Cancel</button>
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
      itemSearch: "",
      showItem: false,
      selectedItem: "Select Item",
      showAddItem: false,
    };
  },
  methods: {
    closeAllModals() {
      this.showItem = false;
      this.showAddItem = false;
    },
  },
  computed: {
    searchedItems() {
      return this.searchItems.filter((x) => {
        return x.toLowerCase().includes(this.itemSearch.toLowerCase());
      });
    },
  },
};
</script>
