<template>
  <h1>Search Section</h1>
  <div class="card">
    <pv-data-view
      :value="pets"
      :layout="layout"
      :paginator="true"
      :rows="9"
      :sortOrder="sortOrder"
      :sortField="sortField"

    >
      <template #header>
        <div class="grid grid-gutter">
          <div class="col-6" style="text-align: left">
            <pv-dropdown
              v-model="sortKey"
              :options="sortOptions"
              optionLabel="label"
              placeholder="Sort By Day"
              @change="onSortChange($event)"
            />
            <pv-dropdown
              v-model="sortKey2"
              :options="sortTypeOptions"
              optionLabel="label"
              placeholder="Sort By Type"
              @change="onSortType($event)"
            />
          </div>

          <div class="col-6" style="text-align: right">
            <pv-data-view-layout-options class="" v-model="layout" />
          </div>
        </div>
      </template>
      <template #list="slotProps">
        <div class="col-12">
          <div class="product-list-item">
            <img :src="slotProps.data.image" style="width: 5rem" />
            <div class="product-list-detail">
              <div class="product-name">
                {{ slotProps.data.name }}
              </div>
              <div class="product-description">
                {{ slotProps.data.description }}
              </div>


              <span class="product-category">{{
                slotProps.data.category
              }}</span>
            </div>
            <div class="product-list-action">
              <span class="product-price"
                >{{ slotProps.data.rescuedTime }} day ago</span
              >
              <pv-button

                @click="openSubscriptionDialog"
                label="Help"
                :disabled="slotProps.data.inventoryStatus === 'UNAVAILABLE'"
                style="margin-bottom: 5px"
              />
              <pv-tag
                v-if="slotProps.data.inventoryStatus === 'AVAILABLE'"
                severity="success"
                >{{ slotProps.data.inventoryStatus }}</pv-tag
              >
              <pv-tag v-else severity="info">{{
                slotProps.data.inventoryStatus
              }}</pv-tag>
            </div>
          </div>
        </div>
      </template>
      <template #grid="slotProps">
        <div class="col-12 md:col-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <span class="product-category">{{
                  slotProps.data.category
                }}</span>
              </div>
              <pv-tag
                v-if="slotProps.data.inventoryStatus === 'AVAILABLE'"
                severity="success"
                >{{ slotProps.data.inventoryStatus }}</pv-tag
              >
              <pv-tag v-else severity="warning">{{
                slotProps.data.inventoryStatus
              }}</pv-tag>
            </div>
            <div class="product-grid-item-content">
              <img :src="slotProps.data.image" style="width: 5rem" />
              <div class="product-name">{{ slotProps.data.name }}</div>
              <!--<div class="product-description">
                {{ slotProps.data.description }}
              </div>-->
              <pv-button label="See description" class="p-button-text" icon="pi pi-external-link" iconPos="right" @click="openDescription(slotProps.data)"/>
             <!--  <pv-rating
                :modelValue="slotProps.data.rating"
                :readonly="true"
                :cancel="false"
              ></pv-rating>-->
            </div>
            <div class="product-grid-item-bottom mt-5">
              <span class="product-price"
              >Rescued <b style="color: #1c80cf">{{ slotProps.data.rescuedTime }}</b> days ago</span
              >
              <pv-button
                label="Help"
                :disabled="slotProps.data.inventoryStatus === 'UNAVAILABLE'"
                @click="openDialog"
              />
            </div>
          </div>
        </div>
      </template>
    </pv-data-view>
    <pv-dialog
      header="Help Form"
      v-model:visible="displayInformation"
      :style="{ width: '450px' }"
      :modal="true"
      class="p-fluid"
    >
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text type="text" id="name" v-model.trim="adopter.name" required="true" />
          <label for="name"> Name </label>
        </span>
      </div>
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text type="text" id="name" v-model.trim="adopter.lastName" required="true" />
          <label for="name"> Last Name </label>
        </span>
      </div>
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text type="text" id="name" v-model.trim="adopter.gender" required="true" />
          <label for="name"> Gender </label>
        </span>
      </div>
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text type="text" id="name" v-model.trim="adopter.age" required="true" />
          <label for="name"> Age </label>
        </span>
      </div>
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text type="text" id="name" v-model.trim="adopter.status" required="true" />
          <label for="name"> Status </label>
        </span>
      </div>
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text type="text" id="name" v-model.trim="adopter.description" required="true" />
          <label for="name"> Description </label>
        </span>
      </div>
      <template #footer>
        <pv-button
          label="No"
          icon="pi pi-times"
          @click="hideDialog"
          class="p-button-text"
        />
        <pv-button
          label="Yes"
          icon="pi pi-check"
          @click="openSubscriptionDialog"
          autofocus
        />
      </template>
    </pv-dialog>
    <pv-dialog header="Description" v-model:visible="displayDescription" :style="{ width: '450px' }" :modal="true" >
      <div class="container">
        <div class="cards">
          <pv-card>

            <template #header>
              <img :src='pet.image' class="imgDescription">
            </template>
            <template #content>
              <h1>{{pet.name}}</h1>
              <p> {{pet.description}}</p>
            </template>
            <template #footer>
              <pv-button label="Help"></pv-button>
            </template>
          </pv-card>
        </div>
      </div>

    </pv-dialog>
  </div>
</template>

<script>
import { PetsApiService } from "../services/pets-api.service";
import { AdoptersApiService } from "../../adopter/services/adopters-api.service";
import {FilterMatchMode} from "primevue/api";

export default {
  name: "search-section",
  data() {
    return {
      pets: [],
      pet: {},
      adopter: {},
      adopters: [],
      petsService: null,
      adoptersService: null,
      layout: "grid",
      sortKey: null,
      sortKey2: null,
      filters: {},
      displayInformation: false,
      displayDescription: false,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        { label: "Day High to Low", value: "!rescuedTime" },
        { label: "Day Low to High", value: "rescuedTime" },
      ],
      sortTypeOptions: [
        { label: "Adult to Baby", value: "!category" },
        { label: "Baby to Adult", value: "category" },
      ],
    };
  },
  created() {
    this.petsService = new PetsApiService();
    this.adoptersService = new AdoptersApiService();

    this.petsService.getAll().then((response) => {
      this.pets = response.data;
      console.log("created");
    });
    this.adoptersService.getAll().then((response) => {
      this.users = response.data;
      console.log("created");
    });
    this.initFilters();
  },
  methods: {
    getStorableAdopter(displayableAdopter) {
      return {
        id: displayableAdopter.id,
        name: displayableAdopter.name,
        lastName: displayableAdopter.lastName,
        gender: displayableAdopter.gender,
        age: displayableAdopter.age,
        status: displayableAdopter.status,
        description: displayableAdopter.description,
      }
    },

    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    },
    onSortType(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey2 = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey2 = sortValue;
      }
    },
    hideDialog() {
      this.displayInformation = false;
    },
    openDialog() {
      this.displayInformation = true;
    },
    openSubscriptionDialog() {
      if (this.adopter.name.trim()) {
        if (this.adopter.id) {
          this.adopter = this.getStorableAdopter(this.adopter);
          this.adoptersService.update(this.adopter.id, this.adopter)
        } else {
          this.adopter.id = 0;
          console.log(this.adopter);
          this.adopter = this.getStorableAdopter(this.adopter);
          this.adoptersService.create(this.adopter).then((response) => {
            this.adopters.push(this.adopter);
            console.log(response);
          });
        }
        this.adopter = {};
      }
    },
    openDescription(pet) {
      console.log(pet);
      this.pet = { ...pet };
      console.log(this.pet);
      this.displayDescription = true;
    },
    closeDescription() {
      this.displayDescription = false;
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    backMethod() {
      window.history.back();
    }
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}
.pv-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

.product-list-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
.product-grid-item-item:hover{
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
img {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-right: 2rem;
}
.product-list-detail {
  flex: 1 1 0;
  margin-left: 1rem
}

.pv-rating {
  margin: 0 0 0.5rem 0;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  align-self: flex-end;
}

.product-list-action {
  display: flex;
  flex-direction: column;
}

.pv-button {
  margin-bottom: 0.5rem;
}

.product-grid-item {
  margin: 0.5rem;
  border: 1px solid var(--surface-border);
}
.product-grid-item-top,
.product-grid-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 2rem 0;
}

.product-grid-item-content {
  text-align: center;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 600;
}
.container{
  display: flex;
  justify-content: center;
  align-content: center;
}
.imgDescription{
    width: 100%;
}
</style>
