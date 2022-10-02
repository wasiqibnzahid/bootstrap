<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <button @click="openVendor" class="btn">Add Vendor</button>
        <button class="btn1">Import from</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead class="text-primary">
        <tr>
          <th scope="col"><input type="checkbox" /> Vendor Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody class="TBD">
        <tr v-for="(d, i) in vendorList" :key="i">
          <td><input type="checkbox" /> {{ d.vendorName }}</td>
          <td>{{ d.email }}</td>
          <td>{{ d.phone }}</td>
          <td>
            <a @click="$router.push('/create-bill')">Create Bill</a>

            <div style="position: relative; display: inline-block">
              <div class="select" ref="modalOpener" @click="showModal(i)">
                <img
                  :class="d.modal ? 'rotateImg' : ''"
                  src="https://static.thenounproject.com/png/551749-200.png"
                />
              </div>
              <div ref="modal" v-show="d.modal" class="dropdown">
                <ul class="options">
                  <li @click="openVendor">Edit</li>
                  <li @click="$router.push('/create-bill')">Create Bill</li>

                  <li @click="deleteVendor = true">
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
    <div v-show="addVendor" class="Dialog">
      <div>
        <span>Add Vendor</span>
        <span @click="CloseDialog" style="cursor: pointer"
          ><strong>X</strong></span
        >
      </div>
      <hr />
      <div>
        <div>
          <label for="">Vendor Name</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label for="">First Name</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Currency</label>
          <select placeholder="USD - U.S dollar" name="" id="">
            <option value="">USD - U.S dollar</option>
            <option value="">USD - U.S dollar</option>
            <option value="">USD - U.S dollar</option>
          </select>
        </div>
        <div>
          <label for="">Country</label>
          <select placeholder="Georgia" name="" id="">
            <option value="Georgia">Georgia</option>
            <option value="Pakistan">Pakistan</option>
            <option value="US">US</option>
          </select>
        </div>
        <div>
          <label for="">Province/State</label>
          <select placeholder="Calgary" name="" id="">
            <option value="Calgary">Calgary</option>
            <option value="">USD - U.S dollar</option>
            <option value="">USD - U.S dollar</option>
          </select>
        </div>
        <div>
          <label for="">Address Line 1</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Address Line 2</label>
          <input type="text" />
        </div>
        <div>
          <label for="">City</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Postal Zip Code</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <button @click="CloseDialog">Cancel</button>
        <button>Save</button>
      </div>
    </div>
    <div style="height:auto !important" v-show="deleteVendor" class="Dialog">
      <div style="font-size:larger;margin: auto;">
        <span>Are you sure you want to delete this vendor? </span> 
      </div>
     
      <div>
        <button @click="CloseDialog">Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      vendorList: [
        {
          vendorName: "Hello",
          email: "test@test.com",
          phone: "(405)555-0128",
          modal: false,
        },
        {
          vendorName: "Hello",
          email: "test@test.com",
          phone: "(405)555-0128",
          modal: false,
        },
        {
          vendorName: "Hello",
          email: "test@test.com",
          phone: "(405)555-0128",
          modal: false,
        },
        {
          vendorName: "Hello",
          email: "test@test.com",
          phone: "(405)555-0128",
          modal: false,
        },
        {
          vendorName: "Hello",
          email: "test@test.com",
          phone: "(405)555-0128",
          modal: false,
        },
      ],
      searchItems: ["Vendor 1", "Vendor 2", "Vendor 3"],
      showSearch: false,
      searchText: "",
      selectedVendor: "All Vendors",
      addVendor: false,
      deleteVendor: false,
    };
  },
  methods: {
    showModal(index) {
      this.vendorList.forEach((x, i) => {
        if (i != index) {
          x.modal = false;
        } else {
          x.modal = !x.modal;
        }
      });
    },
    openVendor() {
      this.vendorList.forEach((x) => {
        x.modal = false;
      });
      this.addVendor = true;
    },
    CloseDialog() {
      this.addVendor = false;
      this.deleteVendor = false;
    },
    // handleModal(e) {
    //   // console.log(e);
    //   let closeModal = true;
    //   this.$refs.modal.forEach((x) => {
    //     if (e.target == x || x.contains(e.target)) {
    //       closeModal = false;
    //     }
    //   });
    //   // console.log(this.$refs.modalOpener);

    //   this.$refs.modalOpener.forEach((x) => {
    //     // console.log(e.target == x.modalOpener);
    //     if (e.target == x) {
    //       closeModal = false;
    //     }
    //   });
    //   if (closeModal) {
    //     this.billList.forEach((x) => {
    //       x.modal = false;
    //     });
    //   }
    //   // Search dropdown
    //   if (
    //     e.target != this.$refs.searchHandler &&
    //     e.target != this.$refs.searchDropdown &&
    //     !this.$refs.searchDropdown.contains(e.target)
    //   ) {
    //     this.showSearch = false;
    //   }
    // },
  },
};
</script>
