import { defineAsyncComponent } from "vue";

export function toolTipPlugin(app, options) {
  if (options.placement) {
    // Do Something...
  }

  app.component(
    "ToolTip",
    defineAsyncComponent(() => import("./ToolTip.vue"))
  );
}
