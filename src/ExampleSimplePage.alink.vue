<template>
  <p>Hello world!</p>
</template>

<script>
export default {
  onLoad(handle, assetLink) {
    handle.defineRoute('com.example.farmos_asset_link.routes.v0.example_simple_page', route => {
      route.path('/example-simple-page');
      route.component(handle.thisPlugin);
    });
  }
}
</script>
