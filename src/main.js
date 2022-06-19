import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import PrimeVue from "primevue/config";

// PrimeVue Styles
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// PrimeFlex Companion
import "primeflex/primeflex.css";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Image from "primevue/image";
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Password from "primevue/password";
import Divider from "primevue/divider";
import InputMask from "primevue/inputmask";
import Calendar from "primevue/calendar";
import AutoComplete from "primevue/autocomplete";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import ToastService from "primevue/toastservice";


const app = createApp(App);

app.config.devtools = true
app.use(router);
app.use(vuetify);
// PrimeVue Configuration
app.use(PrimeVue, { ripple: true });

app.use(ToastService);

// PrimeVue Components
app.component("pv-data-table", DataTable);
app.component("pv-checkbox", Checkbox);
app.component("pv-column", Column);
app.component("pv-button", Button);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-sidebar", Sidebar);
app.component("pv-row", Row);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-card", Card);
app.component("pv-img", Image);
app.component("pv-data-view", DataView);
app.component("pv-rating", Rating);
app.component("pv-password", Password);
app.component("pv-divider", Divider);
app.component("pv-input-mask", InputMask);
app.component("pv-calendar", Calendar);
app.component("pv-autocomplete", AutoComplete);
app.component("pv-chip", Chip);
app.component("pv-data-view-layout-options", DataViewLayoutOptions)
// App mounting

app.mount("#app");

